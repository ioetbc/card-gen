import {NextRequest} from "next/server";
import {TStableDiffusionBody} from "@/app/types";
import {setCard} from "../utils/db/set-card";

export async function POST(request: NextRequest) {
  const data = (await request.json()) as TStableDiffusionBody;

  if (data.status !== "success") return new Response();

  const userId = data.track_id;

  try {
    console.log(`setting card`, data);
    await setCard({data, userId});
  } catch (error) {
    console.error("Error updating card for user:", error);
  }

  return new Response(JSON.stringify(data), {
    headers: {"Content-Type": "application/json"},
  });
}
