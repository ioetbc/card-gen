"use client";
import {useEffect, useState} from "react";
import Image from "next/image";
import fetch from "node-fetch";
import {Navigation} from "./components/navigation";
import {usePresignedURL} from "./hooks/use-presigned-url";
import {useGenerateCard} from "./hooks/use-generate-card";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const getPresignedURL = usePresignedURL();
  const generateCard = useGenerateCard();

  const fuck = async () => {
    await fetch(getPresignedURL.data.url, {
      method: "PUT",
      body: JSON.stringify(file),
      headers: {
        "Content-Type": file.type,
      },
    });
  };

  useEffect(() => {
    if (getPresignedURL.data && file) {
      fuck();
    }
  }, [getPresignedURL.data, file]);

  const handleGenerateCard = () => {
    generateCard.mutate({
      prompt,
    });
  };

  const handleFile = async (file: File) => {
    setFile(file);
    getPresignedURL.mutate({
      fileName: file.name,
      contentType: file.type,
    });
  };

  const d = generateCard?.data as any;
  const data = d?.output || [];

  return (
    <>
      <main className="grid grid-cols-2 gap-4">
        <Navigation
          handlePromptChange={(value) => setPrompt(value)}
          handleMessageChange={(value) => setMessage(value)}
          handleFile={handleFile}
          handleGenerateCard={handleGenerateCard}
        />
        <div className="p-4">
          <h1 className="text-4xl font-bold text-center">build a card</h1>
          <div className="grid grid-cols-2 gap-4">
            {data.map((item: string) => (
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
