"use client";
import {useState} from "react";
import "react-spring-bottom-sheet/dist/style.css";
import {useRouter} from "next/navigation";

import {Button} from "./components/buttons/primary-button";
import {useUserId} from "./hooks/use-user-id";
import {useFirestoreSnapshot} from "./hooks/use-firestore-snapshot";
import {Header} from "./components/Header";
import Image from "next/image";
import {ScrollY} from "./components/scroll-y";
import {Section} from "./components/section";
import {Filters} from "./components/filters";
import {Tray} from "./components/tray";
import {ProductCard} from "./components/product-card";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [message, setMessage] = useState("");

  const router = useRouter();
  const userId = useUserId();
  const {cards} = useFirestoreSnapshot({
    userId,
  });

  return (
    <>
      <main className="relative py-4">
        <Header
          menuOpen={menuOpen}
          setMenuOpen={() => setMenuOpen(!menuOpen)}
          component={
            <>
              <div className="p-4">
                {/* <Filters /> */}
                <Button
                  label="Create Card"
                  handleOnClick={() => router.push("my-cards")}
                  disabled={false}
                  type="primary"
                  size="full"
                  icon={
                    <Image src="/wand.svg" width={20} height={20} alt="logo" />
                  }
                />
              </div>
            </>
          }
        />

        <Section
          title="Gallery"
          pre="Some card designs created using rubberducker."
          component={<Filters />}
          content={null}
        >
          <ScrollY>
            {cards.map((card) => (
              <div className="w-[325px]" key={card.id}>
                <ProductCard
                  id={card.id}
                  image={card.image}
                  prompt={card.prompt}
                  title={card.title}
                  price={5}
                  hasBookmarked={card.saved}
                  message={message}
                  setMessage={setMessage}
                />
              </div>
            ))}
          </ScrollY>
        </Section>

        <Section title="" content={<Tray />}>
          {null}
        </Section>
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
