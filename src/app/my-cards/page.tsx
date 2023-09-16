"use client";

import React, {useState} from "react";
import {Input} from "../components/inputs/input";
import {Empty} from "../components/empty";
import {USER} from "../constants";
import {useGenerateCard} from "../hooks/use-generate-card";
import {useUserId} from "../hooks/use-user-id";
import {ProductCard} from "../components/product-card";
import {useFirestoreSnapshot} from "../hooks/use-firestore-snapshot";

export default function MyCards() {
  const [loading, setLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
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
            {cards.map(
              (card) =>
                card && (
                  <ProductCard
                    key={card.id}
                    url={card?.images?.[0]}
                    prompt={card.prompt}
                    title={card.title}
                    user={USER}
                  />
                )
            )}
          </div>
        )}
        <div className="fixed bottom-0 right-0 left-0 px-4">
          <Input
            handleChange={(value) => setPrompt(value)}
            placeholder="Prompt"
            handleSubmit={handleGenerateCard}
            icon={loading ? "loading" : "search"}
          />
        </div>
      </div>
    </main>
  );
}
