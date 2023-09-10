"use client";
import {useState} from "react";
import "react-spring-bottom-sheet/dist/style.css";

import {Navigation} from "./components/navigation";
import {useGenerateCard} from "./hooks/use-generate-card";
import {Card} from "./components/card";
import {TArtisticStyle, TProduct} from "./types";
import {useMedia} from "./hooks/use-media-query";
import {PrimaryButton} from "./components/buttons/primary-button";
import {ProductDetails} from "./components/product-details";
import {useUserId} from "./hooks/use-user-id";
import {UseSetUser} from "./hooks/user-set-user";
import {useFirestoreSnapshot} from "./hooks/use-firestore-snapshot";
import {useUploadImage} from "./hooks/use-upload-image";

export default function Home() {
  const {isDesktop} = useMedia();
  const [showNavigation, setShowNavigation] = useState<boolean>(isDesktop);
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");
  const [artisticStyle, setArtisticStyle] = useState<TArtisticStyle | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<TProduct>(null);

  const userId = useUserId();
  const {cards} = useFirestoreSnapshot({userId});
  const generateCard = useGenerateCard();
  const setUser = UseSetUser();
  const {upload, downloadURL} = useUploadImage();

  const handleGenerateCard = () => {
    setLoading(true);
    if (!downloadURL) return;

    generateCard.mutate({
      userId,
      prompt,
      artisticStyle,
      initialImage: downloadURL,
    });
  };

  const handleFile = async (file: File) => {
    await upload({file, userId});
    if (!downloadURL) return;

    await setUser.mutateAsync({
      userId,
      initialImage: downloadURL,
    });
  };

  return (
    <>
      <main className="md:grid md:grid-cols-[1fr,3fr] gap-4 relative">
        <Navigation
          isDesktop={isDesktop}
          handlePromptChange={(value) => setPrompt(value)}
          handleMessageChange={(value) => setMessage(value)}
          handleFile={handleFile}
          handleGenerateCard={handleGenerateCard}
          hasArtisticStyle={!!artisticStyle}
          handleArtisticStyleChange={(value) => setArtisticStyle(value)}
          hasPrompt={!!prompt}
          hasMessage={!!message}
          // hasFile={!!getPresignedURL?.data}
          // url={url}
          showNavigation={showNavigation}
          setShowNavigation={setShowNavigation}
        />
        <div className="flex items-center justify-center h-full p-4 my-24">
          <div className="flex items-center justify-center md:justify-start gap-8 flex-wrap">
            {cards.map((card: any) =>
              card.images.map((image: string) => {
                return (
                  <Card
                    key={image}
                    loading={loading}
                    url={image}
                    handleProductChange={() =>
                      setProduct({
                        url: image!,
                        title: "Get from GPT",
                      })
                    }
                  />
                );
              })
            )}
          </div>
        </div>

        <ProductDetails
          product={product}
          handleClose={() => setProduct(null)}
        />

        {!isDesktop && (
          <div className="fixed bottom-4 w-full px-8">
            <PrimaryButton
              label="Create Card"
              handleOnClick={() => setShowNavigation(!showNavigation)}
              disabled={false}
            />
          </div>
        )}
      </main>
    </>
  );
}

// TODO
// Ability to change all settings and make then easy to read. e.g. stength: how different should the image be from the original. The smaller the number the less animated the image will be
// Ability to write over the image using canvas or something
// Ability to purchase a card
// Only allow one filter to be open at a time
// Fix the loading state
// Add price to the card
// Show more info modal that slides up when you click more info button on the card
// Use this prompt to give the card a title. Users should be able to view there old prompts (Can you summarise this in a short sentence between 3 and 6 words) GPT
// Add paper, pckaing and postage details
// Maybe use inpainting
