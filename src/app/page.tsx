"use client";
import {useEffect, useState} from "react";
import fetch from "node-fetch";
import {onSnapshot, doc} from "@firebase/firestore";
import {BottomSheet} from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

import {db} from "./firestore";
import {Navigation} from "./components/navigation";
import {usePresignedURL} from "./hooks/use-presigned-url";
import {useGenerateCard} from "./hooks/use-generate-card";
import {Card} from "./components/card";
import {TArtisticStyle} from "./types";
import Image from "next/image";
import {useMedia} from "./hooks/use-media-query";
import {PrimaryButton} from "./components/buttons/primary-button";

export default function Home() {
  const {isDesktop} = useMedia();
  const [showNavigation, setShowNavigation] = useState<boolean>(isDesktop);
  const [url, setUrl] = useState("");
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");
  const [artisticStyle, setArtisticStyle] = useState<TArtisticStyle | null>(
    null
  );
  const [images, setImages] = useState<string[]>([]);
  const [image, setImage] = useState<string | null>(null);
  const [userId, setUserId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState<{
    url: string;
    title: string;
  } | null>(null);

  const getPresignedURL = usePresignedURL();
  const generateCard = useGenerateCard();

  useEffect(() => {
    if (!userId) return;

    const userDocRef = doc(db, "user", userId.toString());

    const unsub = onSnapshot(userDocRef, (docSnapshot) => {
      if (!docSnapshot.exists()) return;

      const gmm = docSnapshot.data();

      console.log("gmm?.url", gmm?.url);

      if (!gmm?.url) return;

      const split = gmm.url.split(",");

      setImages((prev) => [...prev, ...split]);
      setImage(gmm.url);
      setLoading(false);
    });

    return () => {
      unsub();
    };
  }, [userId]);

  useEffect(() => {
    if (generateCard?.data?.id) {
      setUserId(generateCard?.data?.id);
    }
  }, [generateCard?.data?.id]);

  const uploadFileToSignedURL = async ({
    url,
    file,
  }: {
    url: string;
    file: File;
  }) => {
    console.log("uploading file", url && file);
    if (url && file) {
      return fetch(url, {
        method: "PUT",
        body: JSON.stringify(file),
        headers: {
          "Content-Type": file.type,
        },
      });
    }
    return null;
  };

  const handleGenerateCard = () => {
    setLoading(true);
    generateCard.mutate({
      prompt,
      artisticStyle,
    });
  };

  const handleFile = async (file: File) => {
    console.log("file", file);
    const {url} = await getPresignedURL.mutateAsync({
      fileName: file.name,
      contentType: file.type,
    });

    console.log("efefeefeef", url);
    const response = await uploadFileToSignedURL({url, file});
    console.log("response", response);

    setUrl(URL.createObjectURL(file));
  };

  const mockImages = [
    "https://images.unsplash.com/photo-1680724865725-6b8963f99975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80",
    "https://images.unsplash.com/photo-1680724864727-eaf2856591d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80",
    "https://images.unsplash.com/photo-1680798790107-173a774f34ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2043&q=80",
  ];

  return (
    <>
      <main className="md:grid md:grid-cols-[1fr,3fr] gap-4 relative">
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
          hasFile={!!getPresignedURL?.data}
          url={url}
          showNavigation={showNavigation}
          setShowNavigation={setShowNavigation}
        />
        <div className="flex items-center justify-center h-full p-4 my-24">
          {!mockImages.length && !loading ? (
            <h2 className="text-2xl text-center">
              Generate a card by upload an image and tweaking the prompt.
            </h2>
          ) : (
            <div className="flex items-center gap-8 flex-wrap">
              {mockImages.map((item: string) => (
                <Card
                  key={item}
                  loading={loading}
                  url={item}
                  handleClick={() => setOpen(!open)}
                  handleSelection={() =>
                    setSelection({
                      url: item,
                      title: "get this from GPT",
                    })
                  }
                />
              ))}
            </div>
          )}
        </div>

        <BottomSheet open={open} onDismiss={() => setOpen(false)}>
          <div className="flex gap-4 p-8">
            {selection?.url && (
              <Image width={256} height={256} src={selection.url} alt="card" />
            )}
            <h1 className="text-4xl text-center">{selection?.title}</h1>
          </div>
        </BottomSheet>

        {!isDesktop && (
          <div className="fixed bottom-4 w-full px-8">
            <PrimaryButton
              label="Generate"
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
