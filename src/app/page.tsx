"use client";
import {useState} from "react";
import "react-spring-bottom-sheet/dist/style.css";
import {useRouter} from "next/navigation";

import {Button} from "./components/buttons/primary-button";
import {useUserId} from "./hooks/use-user-id";
import {useSetUser} from "./hooks/user-set-user";
import {useUploadImage} from "./hooks/use-upload-image";
import {ProductCardV2} from "./components/product-card-v2";
import {useFirestoreSnapshot} from "./hooks/use-firestore-snapshot";
import {Header} from "./components/Header";
import {Prompt} from "./components/prompt";
import Image from "next/image";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(false);

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
    <>
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
                      setPrompt={console.log}
                      handleSubmit={console.log}
                      loading={false}
                    />
                    <div className="flex gap-4 justify-end px-4">
                      <Button
                        size="fit"
                        label="Cancel"
                        type="secondary"
                        handleOnClick={() => setHeaderOpen(false)}
                      />
                      <Button
                        size="full"
                        label="Generate"
                        type="primary"
                        handleOnClick={console.log}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4">
                  {/* <Filters /> */}
                  <Button
                    label="Create Card"
                    handleOnClick={() => router.push("my-cards")}
                    disabled={false}
                    type="primary"
                    size="full"
                    icon={
                      <Image
                        src="/wand.svg"
                        width={20}
                        height={20}
                        alt="logo"
                      />
                    }
                  />
                </div>
              )}
            </>
          }
        />

        <div className="flex flex-col sm:flex-row gap-8 py-8">
          {cards.map((card) => (
            <ProductCardV2
              key={card.id}
              id={card.id}
              image={card?.images?.[0]}
              prompt={card.prompt}
              title={card.title}
              price={5}
              hasBookmarked={card.saved}
            />
          ))}
        </div>
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
