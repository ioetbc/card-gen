"use client";
import React, {useState} from "react";
import {Empty} from "../components/empty";
import {useGenerateCard} from "../hooks/use-generate-card";
import {useUserId} from "../hooks/use-user-id";
import {ProductCard} from "../components/product-card";
import {useFirestoreSnapshot} from "../hooks/use-firestore-snapshot";
import {Prompt} from "../components/prompt";
import {Header} from "../components/Header";
import {Button} from "../components/buttons/primary-button";
import Image from "next/image";
import {ECardSize, TArtisticStyle, TCardSize} from "../types";
import {useUploadImage} from "../hooks/use-upload-image";
import {useSetUser} from "../hooks/user-set-user";
import {Toast} from "../components/toast";

export default function MyCards() {
  const [loading, setLoading] = useState(false);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState<TCardSize>(ECardSize.SQUARE);
  const [artisticStyle, setArtisticStyle] = useState<TArtisticStyle>("cubisim");
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(true);

  const generateCard = useGenerateCard();
  const userId = useUserId();
  const {cards} = useFirestoreSnapshot({
    userId,
  });
  const {upload, downloadURL} = useUploadImage();
  const setUser = useSetUser();

  const handleFile = async (file: File) => {
    await upload({file, userId});
    if (!downloadURL) return;

    await setUser.mutateAsync({
      userId,
      initialImage: downloadURL,
    });
  };

  const handleGenerateCard = async () => {
    setLoading(true);

    console.log("handle generate card called", prompt);
    await generateCard
      .mutateAsync({
        userId,
        prompt,
        artisticStyle,
        size,
      })
      .then((data) => {
        console.log("data returned if processing then dont show toast");
        setToastMessage("Card successfully generated");
        setToastOpen(true);
      })
      .catch((error) => {
        setToastMessage("Error generating card");
        // Also wanna change the toast color if an error
        setToastOpen(false);
      });
  };

  console.log("cards", cards);

  return (
    <main className="relative px-4 py-4">
      <Header
        menuOpen={menuOpen}
        setMenuOpen={() => setMenuOpen(!menuOpen)}
        component={
          <>
            {headerOpen ? (
              <div>
                <p className="p-4 text-center text-sm  border-b border-gray-200">
                  Use the input below to generate a new card based off your
                  prompt. Upload an image for a starting point for Stable
                  Diffusion.
                </p>
                <div className="flex flex-col gap-4">
                  <Prompt
                    prompt="something"
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
                    {/* <Button
                      size="fit"
                      label="Cancel"
                      type="secondary"
                      handleOnClick={() => setHeaderOpen(false)}
                    /> */}
                    <Button
                      size="fit"
                      label="Generatse"
                      type="primary"
                      handleOnClick={handleGenerateCard}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-4">
                <Button
                  size="full"
                  type="primary"
                  label="Create new card"
                  handleOnClick={() => setHeaderOpen(!headerOpen)}
                  icon={
                    <Image src="/wand.svg" width={20} height={20} alt="logo" />
                  }
                />
              </div>
            )}
          </>
        }
      />
      <div className="relative py-14 flex flex-col gap-8">
        {!cards.length ? (
          <Empty />
        ) : (
          <div className="flex flex-col gap-16">
            {cards.map((card) =>
              card.images.map((image) => (
                <ProductCard
                  key={image}
                  id={card.id}
                  image={image}
                  prompt={card.prompt}
                  title={card.title}
                  price={5}
                  hasBookmarked={card.saved}
                  cta={
                    <div className="flex justify-end">
                      <Button
                        size="fit"
                        label="Add message"
                        type="primary"
                        handleOnClick={console.log}
                      />
                    </div>
                  }
                />
              ))
            )}
          </div>
        )}
      </div>
      <Toast
        open={toastOpen}
        setOpen={setToastOpen}
        description={toastMessage}
      />
    </main>
  );
}
