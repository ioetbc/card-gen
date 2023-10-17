"use client";
import React, {useState} from "react";
import {Empty} from "../components/empty";
import {useUserId} from "../hooks/use-user-id";
import {Header} from "../components/Header";
import {Toast} from "../components/toast";
import {useFirestoreBookmarkedCard} from "../hooks/use-firestore-bookmarked-card";
import {Card} from "../components/card";
import {TEditCard} from "../types";

export default function MyCards() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [frontMessage, setFrontMessage] = useState<TEditCard>({
    value: "Happy Christmas Bob!",
    color: "blue",
    alignment: "center",
    size: "2xl",
  });

  const [insideMessage, setInsideMessage] = useState<TEditCard>({
    value: "To Bob, Merry christmas...",
    color: "black",
    alignment: "left",
    size: "md",
  });

  const userId = useUserId();

  const {cards} = useFirestoreBookmarkedCard({
    userId,
  });

  const card = cards[0]; // use the selected card obvs

  return (
    <main className="relative py-4">
      <Header menuOpen={menuOpen} setMenuOpen={() => setMenuOpen(!menuOpen)} />
      <div className="relative py-14 flex flex-col gap-8">
        {!card ? (
          <Empty label="No card selected" />
        ) : (
          <div className="flex flex-col gap-16">
            <Card
              id={card.id}
              checkoutURL="something"
              image={card.image}
              frontMessage={frontMessage}
              insideMessage={insideMessage}
              setFrontMessage={(value) => setFrontMessage(value)}
              setInsideMessage={(value) => setInsideMessage(value)}
            />
          </div>
        )}
      </div>
    </main>
  );
}
