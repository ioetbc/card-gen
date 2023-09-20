import OpenAI from "openai";

import {getPrompt} from "./get-prompt";

type GenerateCardTitleProps = {
  prompt: string;
};

const openai = new OpenAI({
  apiKey: process.env.GPT_API_SECRET,
});

export const generateCardTitle = async ({prompt}: GenerateCardTitleProps) => {
  const content = getPrompt(prompt);
  console.log("content", content);

  const gptResponse = await openai.chat.completions.create({
    messages: [{role: "user", content}],
    model: "gpt-3.5-turbo",
  });

  console.log("gptResponse", gptResponse.choices);
  return gptResponse.choices[0].message.content;
};
