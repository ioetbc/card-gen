"use client";
import React, {useState} from "react";
import {useSearchParams} from "next/navigation";
import {Empty} from "../components/empty";
import {useUserId} from "../hooks/use-user-id";
import {Header} from "../components/Header";
import {Card} from "../components/edit-card";
import {EFontFamily, TAddress, TEditFrontCard, TEditInsideCard} from "../types";
import {useCheckoutSession} from "../hooks/use-checkout-session";
import {useFirestoreSelectedCard} from "../hooks/use-firestore-selected-card";

export default function MyCards() {
  const searchParams = useSearchParams();
  const checkout = useCheckoutSession();
  const [menuOpen, setMenuOpen] = useState(false);
  const [address, setAddress] = useState<TAddress | null>(null);
  const [frontMessage, setFrontMessage] = useState<TEditFrontCard>({
    value: "Happy Christmas Bob!",
    color: "blue",
    alignment: "center",
    size: "2xl",
    family: EFontFamily.COMIC_SANS,
  });

  const [insideMessage, setInsideMessage] = useState<TEditInsideCard>({
    value: {
      header: "Hey Bob!",
      body: "Happy Christmas Bob! hope you have a lovely holiday and a great new year!",
      footer: "Love Bob xxx",
    },
    color: "black",
    alignment: "left",
    size: "md",
    family: EFontFamily.COMIC_SANS,
  });

  const userId = useUserId();

  const documentId = searchParams.get("document");
  console.log("documentId", documentId);

  const {card} = useFirestoreSelectedCard({
    userId,
    documentId,
  });

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
              checkoutURL={checkout?.data?.url}
              image={card.image}
              frontMessage={frontMessage}
              insideMessage={insideMessage}
              setFrontMessage={(value) => setFrontMessage(value)}
              setInsideMessage={(value) => setInsideMessage(value)}
              address={address}
              setAddress={setAddress}
            />
          </div>
        )}
      </div>
    </main>
  );
}
