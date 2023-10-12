import {query, collection, onSnapshot, where} from "firebase/firestore";
import {useEffect, useState} from "react";
import {db} from "../firestore";
import {TCard} from "../types";

export const useFirestoreBookmarkedCard = ({userId}: {userId: string}) => {
  const [cards, setCards] = useState<TCard[]>([]);
  useEffect(() => {
    if (!userId) {
      console.error("userId is not provided!");
      return;
    }

    const cardsCollectionRef = collection(db, "user", userId, "cards");
    const cardsQuery = query(cardsCollectionRef, where("saved", "==", true));

    const unsubscribe = onSnapshot(cardsQuery, (querySnapshot) => {
      querySnapshot.docChanges().forEach((change) => {
        const cardData = {
          ...change.doc.data(),
          id: change.doc.id,
        } as TCard;

        if (change.type === "added") {
          setCards((prevCards) => [cardData, ...prevCards]);
        } else if (change.type === "removed") {
          setCards((prevCards) =>
            prevCards.filter((card) => card.id !== cardData.id)
          );
        }
      });
    });

    return () => unsubscribe();
  }, [userId]);

  return {cards};
};
