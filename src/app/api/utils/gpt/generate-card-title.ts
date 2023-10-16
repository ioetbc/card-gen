import OpenAI from "openai";
import trim from "lodash/trim";

import {getPrompt} from "./get-prompt";

type GenerateCardTitleProps = {
  prompt: string;
};

const openai = new OpenAI({
  apiKey: process.env.GPT_API_SECRET,
});

export const generateCardTitle = async ({prompt}: GenerateCardTitleProps) => {
  const content = getPrompt(prompt);

  const gptResponse = await openai.chat.completions.create({
    messages: [{role: "user", content}],
    model: "gpt-3.5-turbo",
  });

  const text = gptResponse.choices[0].message.content;

  if (text) {
    const title = trim(text, '""');
    return title;
  }

  return "Generic title";
};
