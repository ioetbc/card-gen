"use client";
import {useEffect, useState} from "react";
import {useMutation} from "@tanstack/react-query";
import Image from "next/image";
import fetch from "node-fetch";
import {Navigation} from "./components/navigation";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);

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
      body: JSON.stringify({fileName: "test.jpg", contentType: "image/jpg"}),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const url = await response.json();
    return url;
  });

  useEffect(() => {
    if (getPresignedURL.isSuccess) {
      const {data} = getPresignedURL;
      if (data.url) {
        handleUserUpload({
          url: data.url,
          type: "image/jpg",
        });
      }
    }
  }, [getPresignedURL]);

  const handlePromptChange = (value: string) => {
    setPrompt(value);
  };

  const handleImageCreate = () => {
    generate.mutate();
  };

  const handleUserUpload = async ({url, type}: {url: string; type: string}) => {
    console.log("url", url);
    console.log("type", type);
    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(file),
      headers: {
        "Content-Type": type,
      },
    });

    console.log("response", response);
  };

  const handleMessageChange = (value: string) => {
    setMessage(value);
  };

  const handleFile = (file: File) => {
    getPresignedURL.mutate();
    setFile(file);
  };

  const d = generate?.data as any;
  const data = d?.output || [];

  return (
    <>
      <main className="grid grid-cols-2 gap-4">
        <Navigation
          handlePromptChange={handlePromptChange}
          handleMessageChange={handleMessageChange}
          handleFile={handleFile}
          handleImageCreate={handleImageCreate}
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
