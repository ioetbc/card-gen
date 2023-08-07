import {USER_UPLOADS_BUCKET} from "@/app/constants";
import {S3Client, PutObjectCommand} from "@aws-sdk/client-s3";
import {getSignedUrl} from "@aws-sdk/s3-request-presigner";
import {randomBytes} from "node:crypto";

export const client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

type Args = {
  bucket?: string;
  key: string;
  contentType?: string;
};

const sanitizeFilename = (filename: string) => {
  return filename.replace(/ /g, "_");
};

const generateUploadId = () => randomBytes(32).toString("hex");

export async function POST(request: Request) {
  const {fileName, contentType} = await request.json();

  const objectKey = `upload/${generateUploadId()}/${encodeURIComponent(
    sanitizeFilename(fileName)
  )}`;

  try {
    const command = new PutObjectCommand({
      Bucket: USER_UPLOADS_BUCKET,
      Key: objectKey,
      ContentType: contentType,
    });

    const url = await getSignedUrl(client, command, {expiresIn: 3600});

    console.log("url", url);

    return new Response(JSON.stringify({url}), {
      headers: {"Content-Type": "application/json"},
    });
  } catch (cause) {
    throw new Error("Unable to generate presigned URL", {cause});
  }
}
