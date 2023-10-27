import {useEffect, useState} from "react";
import {db} from "../firestore";
import {TCard} from "../types";
import {doc, onSnapshot} from "firebase/firestore";

type UseFirestoreSelectedCardProps = {
  userId: string;
  documentId: string | null;
};

export const useFirestoreSelectedCard = ({
  userId,
  documentId,
}: UseFirestoreSelectedCardProps) => {
  const [card, setCard] = useState<TCard | null>(null);

  useEffect(() => {
    if (!userId || !documentId) {
      console.error("userId or documentId is not provided!");
      return;
    }

    const docRef = doc(db, "user", userId, "cards", documentId);

    const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        const newCard = {
          ...data,
          id: docSnapshot.id,
        } as TCard;

        setCard(newCard);
      } else {
        console.error("Document not found!");
      }
    });

    return () => unsubscribe();
  }, [userId, documentId]);

  return {card};
};
