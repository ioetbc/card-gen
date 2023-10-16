"use client";
import React, {useState} from "react";
import {Empty} from "../components/empty";
import {useUserId} from "../hooks/use-user-id";
import {Header} from "../components/Header";
import {Toast} from "../components/toast";
import {useFirestoreBookmarkedCard} from "../hooks/use-firestore-bookmarked-card";
import {Card} from "../components/card";

export default function MyCards() {
  const [menuOpen, setMenuOpen] = useState(false);
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
              frontMessage="something"
              image={card.image}
              insideMessage="to bob, happy bornday"
              setFrontMessage={() => {}}
              setInsideMessage={() => {}}
            />
          </div>
        )}
      </div>
    </main>
  );
}
