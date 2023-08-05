"use client";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import Image from "next/image";
import fetch from "node-fetch";
import {Navigation} from "./components/navigation";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const createCard = useMutation(async () => {
    const response = await fetch("/api/hello", {
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
    createCard.mutate();
  };

  console.log("mutation", createCard);

  const d = createCard?.data as any;
  const data = d?.output || [];

  return (
    <>
      <main className="grid grid-cols-2 gap-4">
        <Navigation
          handlePromptChange={handlePromptChange}
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
