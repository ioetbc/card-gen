"use client";
import {useState} from "react";
import "react-spring-bottom-sheet/dist/style.css";
import {useRouter} from "next/navigation";

import {useMedia} from "./hooks/use-media-query";
import {PrimaryButton} from "./components/buttons/primary-button";
// import {ProductDetails} from "./components/product-details";
import {useUserId} from "./hooks/use-user-id";
import {useSetUser} from "./hooks/user-set-user";
import {useUploadImage} from "./hooks/use-upload-image";
import {MOCK_CARDS_CREATE_NEW_FIRESTORE_COLLECTION, USER} from "./constants";
import {ProductCard} from "./components/product-card";
import {Filters} from "./components/filters";
import {useFirestoreSnapshot} from "./hooks/use-firestore-snapshot";

export default function Home() {
  const {isDesktop} = useMedia();
  const router = useRouter();
  const userId = useUserId();
  const {cards} = useFirestoreSnapshot({
    userId,
  });

  const setUser = useSetUser();
  const {upload, downloadURL} = useUploadImage();

  const handleFile = async (file: File) => {
    await upload({file, userId});
    if (!downloadURL) return;

    await setUser.mutateAsync({
      userId,
      initialImage: downloadURL,
    });
  };

  return (
    <main className="md:grid md:grid-cols-[1fr,3fr] gap-4 relative px-4 py-4">
      <div className="flex flex-col sm:flex-row gap-8 py-20">
        <Filters />

        {cards.map((card) => (
          <ProductCard
            key={card.id}
            prompt={card.prompt}
            url={card?.images?.[0]}
            title={card.title}
            user={USER}
          />
        ))}
      </div>

      {!isDesktop && (
        <div className="fixed bottom-4 right-0 left-0 px-16">
          <PrimaryButton
            label="Create Card"
            handleOnClick={() => router.push("my-cards")}
            disabled={false}
          />
        </div>
      )}
    </main>
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
