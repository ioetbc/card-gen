import {query, collection, onSnapshot, orderBy} from "firebase/firestore";
import {useEffect, useState} from "react";
import {db} from "../firestore";
import {TCard} from "../types";

export const useFirestoreSnapshot = ({userId}: {userId: string}) => {
  const [cards, setCards] = useState<TCard[]>([]);

  console.log("userId", userId);

  useEffect(() => {
    if (!userId) {
      console.error("userId is not provided!");
      return;
    }

    const cardsCollectionRef = collection(db, "user", userId, "cards");
    const cardsQuery = query(cardsCollectionRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(cardsQuery, (querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          const newCard = {
            ...change.doc.data(),
            id: change.doc.id,
          } as TCard;

          setCards((prevCards) => [newCard, ...prevCards]);
        }
      });
    });

    return () => unsubscribe();
  }, [userId]);

  return {cards};
};
