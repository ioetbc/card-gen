import {NextRequest} from "next/server";
import {db} from "../firebase";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const {userId, initialImage} = body;
  const docRef = db.collection("user").doc(userId);

  try {
    await docRef.set({
      initialImage,
    });
  } catch (error) {
    console.error("Error writing document: ", error);
  }

  return new Response();
}
