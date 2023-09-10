import {useState} from "react";
import {storage} from "../firestore";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  StorageError,
} from "firebase/storage";

interface TUpload {
  file: File;
  userId: string;
}

export const useUploadImage = () => {
  const [downloadURL, setDownloadURL] = useState<string | null>(null);
  const [error, setError] = useState<StorageError | null>(null);

  const upload = async ({file}: TUpload) => {
    try {
      const storageRef = ref(storage, `images/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const {bytesTransferred, totalBytes} = snapshot;
          const progress = (bytesTransferred / totalBytes) * 100;

          console.log(`Upload is ${progress}% done`);
        },
        (error: StorageError) => {
          setError(error);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setDownloadURL(url);
        }
      );
    } catch (error: any) {
      console.error("Error uploading image:", error);
      setError(error);
    }
  };

  return {upload, downloadURL, error};
};
