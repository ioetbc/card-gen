"use client";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";
import Image from "next/image";
import fetch from "node-fetch";

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

  const handlePromptChange = (e: any) => {
    console.log(e.target.value);
    setPrompt(e.target.value);
  };

  const handleImageCreate = (event: React.FormEvent) => {
    event.preventDefault();
    createCard.mutate();
  };

  console.log("mutation", createCard);

  const d = createCard?.data as any;
  const data = d?.output || [];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">build a card</h1>
      <form onSubmit={handleImageCreate}>
        <input
          onChange={handlePromptChange}
          className="border-2 border-black"
        />
        <button type="submit">submit</button>
      </form>
      <div className="grid grid-cols-4">
        {data.map((item: string) => (
          <Image key={item} src={item} width={512} height={512} alt="card" />
        ))}
      </div>
    </main>
  );
}
