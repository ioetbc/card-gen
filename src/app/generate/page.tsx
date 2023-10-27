"use client";
import React, {useEffect, useRef, useState} from "react";
import {Empty} from "../components/empty";
import {useGenerateCard} from "../hooks/use-generate-card";
import {useUserId} from "../hooks/use-user-id";
import {ProductCard} from "../components/product-card";
import {useFirestoreSnapshot} from "../hooks/use-firestore-snapshot";
import {Prompt} from "../components/prompt";
import {Header} from "../components/Header";
import {Button} from "../components/buttons/primary-button";
import {ECardSize, TArtisticStyle, TCardSize, TToast} from "../types";
import {useUploadImage} from "../hooks/use-upload-image";
import {useSetUser} from "../hooks/use-set-user";
import {Toast} from "../components/toast";
import {useCheckoutSession} from "../hooks/use-checkout-session";

export default function MyCards() {
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<TToast>({
    open: false,
    description: "",
    fill: "pink",
  });

  const [prompt, setPrompt] = useState("");
  const [frontMessage, setFrontMessage] = useState("");
  const [insideMessage, setInsideMessage] = useState("");
  const [size, setSize] = useState<TCardSize>(ECardSize.SQUARE);
  const [artisticStyle, setArtisticStyle] = useState<TArtisticStyle | null>(
    null
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const isInitialRender = useRef(true);
  const generateCard = useGenerateCard();
  const checkout = useCheckoutSession();
  const userId = useUserId();

  const {cards} = useFirestoreSnapshot({
    userId,
  });
  const {upload, downloadURL} = useUploadImage();
  const setUser = useSetUser();

  useEffect(() => {
    if (!cards.length) return;

    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    setToast({
      open: true,
      description: "Card successfully generated",
      fill: "pink",
    });

    setLoading(false);
  }, [cards]);

  const handleFile = async (file: File) => {
    await upload({file, userId});
    console.log("downloadURL", downloadURL);
    if (!downloadURL) return;

    await setUser.mutateAsync({
      userId,
      initialImage: downloadURL,
    });
  };

  const handleGenerateCard = async () => {
    setLoading(true);
    setToast({
      open: true,
      description: "Typically takes 30 ish seconds",
      fill: "pink",
    });
    await generateCard
      .mutateAsync({
        userId,
        prompt,
        artisticStyle,
        initialImage: downloadURL,
        size,
      })
      .catch((error) => {
        setToast({
          open: true,
          description: "There was an error, please try again",
          fill: "red",
        });
        setLoading(false);
      });
  };

  return (
    <main className="relative py-4">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={() => setMenuOpen(!menuOpen)}
        component={
          <>
            <div>
              <p className="p-4 text-center text-sm  border-b border-gray-200">
                Use the input below to generate a new card based off your
                prompt. Upload an image for a starting point for Stable
                Diffusion.
              </p>
              <div className="flex flex-col gap-4">
                <Prompt
                  prompt={prompt}
                  placeholder="A small cute cat sitting in front of a..."
                  setPrompt={setPrompt}
                  setArtisticStyle={setArtisticStyle}
                  artisticStyle={artisticStyle}
                  handleSubmit={console.log}
                  loading={false}
                  size={size}
                  setSize={setSize}
                  handleFile={handleFile}
                />
                <div className="flex gap-4 justify-end px-4 pb-4">
                  <Button
                    size="full"
                    label="Generate card"
                    type="primary"
                    handleOnClick={handleGenerateCard}
                    loading={loading}
                  />
                </div>
              </div>
            </div>
          </>
        }
      />
      <div className="relative py-14 flex flex-col gap-8">
        {!cards.length ? (
          <Empty label="No cards generated yet." />
        ) : (
          <div className="flex flex-col gap-16">
            {cards.map((card) => (
              <ProductCard
                key={card.id}
                id={card.id}
                image={card.image}
                prompt={card.prompt}
                title={card.title}
                price={5}
                hasBookmarked={card.saved}
                checkoutURL={checkout?.data?.url}
                frontMessage={frontMessage}
                setFrontMessage={setFrontMessage}
                insideMessage={insideMessage}
                setInsideMessage={setInsideMessage}
              />
            ))}
          </div>
        )}
      </div>
      <Toast setToast={setToast} toast={toast} />
    </main>
  );
}
