import {NextRequest} from "next/server";
import {db} from "../firebase";

type TBody = {
  status: string;
  webhook_type: string;
  track_id: string;
  id: number;
  meta: Meta;
  output: string[];
};

type Meta = {
  H: number;
  W: number;
  file_prefix: string;
  guidance_scale: number;
  init_image: string;
  n_samples: number;
  negative_prompt: string;
  outdir: string;
  prompt: string;
  safetychecker: string;
  seed: number;
  steps: number;
  strength: number;
};

async function addUserToFirestore(body: TBody) {
  const output = body.output.map((item: any) => {
    return {
      url: item,
    };
  });

  const customerData = {
    ...body.meta,
    output,
  };

  try {
    const ref = await db.collection("user").add(customerData);
    console.log(`user added with ID: ${ref.id}`);
  } catch (error) {
    console.error("Error adding customer:", error);
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log("this actually worked?", body);

  if (body.status !== "success") return new Response();

  await addUserToFirestore(body);

  return new Response();
}
