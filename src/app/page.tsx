"use client";
import {useMutation, useQuery} from "@tanstack/react-query";
import Image from "next/image";
import {use, useState} from "react";
import {STABLE_DIFFUSION_URL} from "./constants";
import fetch from "node-fetch";

export default function Home() {
  const [prompt, setPrompt] = useState("");

  const mutation = useMutation(async () => {
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
    mutation.mutate();
  };

  console.log("mutation", mutation);

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
      {mutation.data?.output.map((item: string) => (
        <Image key={item} src={item} width={512} height={512} alt="card" />
      ))}
    </main>
  );
}
