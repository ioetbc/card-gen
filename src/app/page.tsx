"use client";
import {useState} from "react";
import Image from "next/image";
import fetch from "node-fetch";
import {Navigation} from "./components/navigation";
import {usePresignedURL} from "./hooks/use-presigned-url";
import {useGenerateCard} from "./hooks/use-generate-card";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");

  const getPresignedURL = usePresignedURL();
  const generateCard = useGenerateCard();

  const uploadFileToSignedURL = async ({
    url,
    file,
  }: {
    url: string;
    file: File;
  }) => {
    if (getPresignedURL.data && file) {
      await fetch(url, {
        method: "PUT",
        body: JSON.stringify(file),
        headers: {
          "Content-Type": file.type,
        },
      });
    }
  };

  const handleGenerateCard = () => {
    generateCard.mutate({
      prompt,
    });
  };

  const handleFile = async (file: File) => {
    const {url} = await getPresignedURL.mutateAsync({
      fileName: file.name,
      contentType: file.type,
    });

    console.log("efefeefeef", url);
    uploadFileToSignedURL({url, file});
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
          <h1 className="text-4xl font-bold text-center">Build a Card</h1>
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
