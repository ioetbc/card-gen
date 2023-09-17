"use client";

import React, {useState} from "react";
import {Input} from "../components/inputs/input";
import {Empty} from "../components/empty";
import {USER} from "../constants";
import {useGenerateCard} from "../hooks/use-generate-card";
import {useUserId} from "../hooks/use-user-id";
import {ProductCardV2} from "../components/product-card-v2";
import {useFirestoreSnapshot} from "../hooks/use-firestore-snapshot";
import {useToggleOnScroll} from "../hooks/use-toggle-scroll";
import {Card} from "../components/card";
import {Prompt} from "../components/prompt";
import {Header} from "../components/Header";
import {Button} from "../components/buttons/primary-button";

export default function MyCards() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(false);

  const isInputVisible = useToggleOnScroll();
  const generateCard = useGenerateCard();
  const userId = useUserId();
  const {cards} = useFirestoreSnapshot({
    userId,
  });

  const handleGenerateCard = async () => {
    setLoading(true);

    await generateCard.mutateAsync({
      userId,
      prompt,
      artisticStyle: "photograph",
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
              <div className="px-4">
                <Button
                  size="full"
                  type="secondary"
                  label="Create new card"
                  handleOnClick={() => setHeaderOpen(!headerOpen)}
                />
              </div>
            )}
          </>
        }
      />
      <div className="relative py-14 flex flex-col gap-8">
        {!cards.length ? (
          <Empty user={USER} />
        ) : (
          <div className="flex flex-col gap-16">
            {cards.map((card) => (
              <ProductCardV2
                key={card.id}
                image={card?.images?.[0]}
                prompt={card.prompt}
                title={card.title}
                price={5}
                hasBookmarked={false}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
