import {query, collection, onSnapshot} from "firebase/firestore";
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
    const cardsQuery = query(cardsCollectionRef);

    const unsubscribe = onSnapshot(cardsQuery, (querySnapshot) => {
      const cardsArray: TCard[] = [];
      querySnapshot.forEach((doc) => {
        cardsArray.push({
          ...doc.data(),
          id: doc.id,
        } as TCard);
      });

      console.log("cardsArray", cardsArray);
      setCards(cardsArray);
    });

    return () => unsubscribe();
  }, [userId]);

  return {cards};
};
