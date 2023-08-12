"use client";
import {useEffect, useState} from "react";
import Image from "next/image";
import fetch from "node-fetch";
import {onSnapshot, doc} from "@firebase/firestore";
import {db} from "./firestore";

import {Navigation} from "./components/navigation";
import {usePresignedURL} from "./hooks/use-presigned-url";
import {useGenerateCard} from "./hooks/use-generate-card";

export default function Home() {
  const [url, setUrl] = useState("");
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [userId, setUserId] = useState<string>("");

  const getPresignedURL = usePresignedURL();
  const generateCard = useGenerateCard();

  useEffect(() => {
    // if (!userId) return;

    const userDocRef = doc(db, "user", "35020059".toString());

    const unsub = onSnapshot(userDocRef, (docSnapshot) => {
      if (!docSnapshot.exists()) return;

      const gmm = docSnapshot.data();

      console.log("gmm?.url", gmm?.url);

      if (!gmm?.url) return;

      const split = gmm.url.split(",");

      setImages((prev) => [...prev, ...split]);
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
    generateCard.mutate({
      prompt,
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

  const id = generateCard?.data?.id;

  console.log("id", id);
  return (
    <>
      <main className="grid grid-cols-[1fr,3fr] gap-4">
        <Navigation
          handlePromptChange={(value) => setPrompt(value)}
          handleMessageChange={(value) => setMessage(value)}
          handleFile={handleFile}
          handleGenerateCard={handleGenerateCard}
          hasPrompt={!!prompt}
          hasMessage={!!message}
          hasFile={!!getPresignedURL?.data}
          url={url}
        />
        <div className="p-4">
          <div className="grid grid-cols-2 gap-4">
            {images.map((item: string) => (
              <Image
                key={item}
                src={item}
                width={512}
                height={512}
                alt="card"
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
