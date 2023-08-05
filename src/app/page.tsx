"use client";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import Image from "next/image";
import fetch from "node-fetch";
import {Navigation} from "./components/navigation";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const generate = useMutation(async () => {
    const response = await fetch("/api/generate", {
      method: "POST",
      body: JSON.stringify({prompt}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  });

  const getPresignedURL = useMutation(async () => {
    const response = await fetch("/api/get-presigned-url", {
      method: "POST",
      body: JSON.stringify({prompt}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  });

  const handlePromptChange = (value: string) => {
    setPrompt(value);
  };

  const handleImageCreate = () => {
    generate.mutate();
  };

  const handlePreSignedURL = () => {
    getPresignedURL.mutate();
  };

  const handleUserUpload = async () => {
    const url = getPresignedURL?.data.url;
    console.log("url", url);

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(
        "https://rubberducker-user-uploads.s3.eu-west-2.amazonaws.com/test.jpeg"
      ),
      headers: {
        "Content-Type": "image/jpeg", // Or 'image/png' if your image is a PNG
      },
    });

    console.log("response", response);
  };

  console.log("mutation", generate);

  const d = generate?.data as any;
  const data = d?.output || [];

  return (
    <>
      <main className="grid grid-cols-2 gap-4">
        <Navigation
          handlePromptChange={handlePromptChange}
          handleImageCreate={handleImageCreate}
          handlePreSignedURL={handlePreSignedURL}
          handleUserUpload={handleUserUpload}
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
