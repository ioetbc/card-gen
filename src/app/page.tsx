"use client";
import {useState} from "react";
import "react-spring-bottom-sheet/dist/style.css";

import {Navigation} from "./components/navigation";
import {useGenerateCard} from "./hooks/use-generate-card";
import {Card} from "./components/card";
import {TArtisticStyle, TCard, TProduct} from "./types";
import {useMedia} from "./hooks/use-media-query";
import {PrimaryButton} from "./components/buttons/primary-button";
import {ProductDetails} from "./components/product-details";
import {useUserId} from "./hooks/use-user-id";
import {useSetUser} from "./hooks/user-set-user";
import {useUploadImage} from "./hooks/use-upload-image";
import {Header} from "./components/Header";
import {MOCK_CARDS_CREATE_NEW_FIRESTORE_COLLECTION} from "./constants";
import {ProductCard} from "./components/product-cards";

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
  const [cards, setCards] = useState<TCard[]>([]);
  const [headerOpen, setHeaderOpen] = useState(false);

  const userId = useUserId();
  const generateCard = useGenerateCard();
  const setUser = useSetUser();
  const {upload, downloadURL} = useUploadImage();

  const handleGenerateCard = async () => {
    setLoading(true);
    if (!downloadURL) return;

    const data = await generateCard.mutateAsync({
      userId,
      prompt,
      artisticStyle,
      initialImage: downloadURL,
    });

    setCards(data.output);
    setShowNavigation(false);

    console.log("data", data);
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
      <main
        className="md:grid md:grid-cols-[1fr,3fr] gap-4 relative px-4 py-4"
        onClick={() => headerOpen && setHeaderOpen(false)}
      >
        <Header
          headerOpen={headerOpen}
          setHeaderOpen={() => setHeaderOpen(!headerOpen)}
        />
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
          loading={loading}
          hasFile={!!downloadURL}
          url={downloadURL}
          showNavigation={showNavigation}
          setShowNavigation={setShowNavigation}
        />

        <div className="flex flex-col sm:flex-row gap-8 py-12">
          {MOCK_CARDS_CREATE_NEW_FIRESTORE_COLLECTION.map((card: any) => (
            <ProductCard
              key={card.id}
              prompt={card.prompt}
              url={card.url}
              user={card.user}
            />
          ))}
        </div>

        <ProductDetails
          product={product}
          handleClose={() => setProduct(null)}
        />

        {!isDesktop && (
          <div className="fixed bottom-4 right-0 left-0 px-4">
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
