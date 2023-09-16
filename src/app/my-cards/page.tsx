"use client";

import React, {useState} from "react";
import {Input} from "../components/inputs/input";
import {Empty} from "../components/empty";
import {USER} from "../constants";
import {useGenerateCard} from "../hooks/use-generate-card";
import {useUserId} from "../hooks/use-user-id";
import {ProductCard} from "../components/product-card";
import {useFirestoreSnapshot} from "../hooks/use-firestore-snapshot";
import {useToggleOnScroll} from "../hooks/use-toggle-scroll";

export default function MyCards() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

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
      <div className="relative py-14">
        {!cards.length ? (
          <Empty user={USER} />
        ) : (
          <div className="flex flex-col gap-16">
            {cards.map((card) => (
              <ProductCard
                key={card.id}
                url={card?.images?.[0]}
                prompt={card.prompt}
                title={card.title}
                user={USER}
              />
            ))}
          </div>
        )}
        <div
          className={`${
            isInputVisible ? "block" : "hidden"
          } fixed bottom-0 right-0 left-0 px-4 bg-white`}
        >
          <Input
            handleChange={(value) => setPrompt(value)}
            placeholder="A happy dog sitting in front of a roaring fire"
            handleSubmit={handleGenerateCard}
            icon={loading ? "loading" : "search"}
            prompt={prompt}
          />
          <div className="border-r border-l border-b border-black px-4 flex items-center">
            <div className="grid grid-cols-4 gap-4">
              <div className="flex items-center col-span-2 border-r border-black pr-4 py-4">
                <p className="text-sm">Artistic style</p>
              </div>
              <div className="flex items-center col-span-2 pr-4 py-4">
                <p className="text-sm">Upload an image</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
