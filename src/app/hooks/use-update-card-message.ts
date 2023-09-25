import {doc, updateDoc} from "firebase/firestore";
import {useState} from "react";
import {db} from "../firestore";

type updateCardMessageProps = {
  userId: string;
  id: string;
  message: string;
};

export const useFirestoreUpdate = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const updateCardMessage = async ({
    userId,
    id,
    message,
  }: updateCardMessageProps) => {
    setLoading(true);
    setError(null);

    try {
      const cardDocRef = doc(db, "user", userId, "cards", id);
      await updateDoc(cardDocRef, {
        message,
      });
    } catch (error: any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return {updateCardMessage, loading, error};
};
