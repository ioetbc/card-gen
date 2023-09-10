import {query, collection, onSnapshot} from "firebase/firestore";
import {useEffect, useState} from "react";
import {db} from "../firestore";

interface Card {
  // Define the shape of your card data here, for example:
  imageUrl?: string;
  userId?: string;
  // Add other card properties if needed
}

export const useFirestoreSnapshot = ({userId}: {userId: string}) => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    if (!userId) {
      console.error("userId is not provided!");
      return;
    }

    const cardsCollectionRef = collection(db, "user", userId, "cards");
    const cardsQuery = query(cardsCollectionRef);

    const unsubscribe = onSnapshot(cardsQuery, (querySnapshot) => {
      const cardsArray: Card[] = [];
      querySnapshot.forEach((doc) => {
        cardsArray.push({
          ...doc.data(),
          id: doc.id,
        } as Card);
      });
      setCards(cardsArray);
    });

    return () => unsubscribe();
  }, [userId]); // include userId in the dependency array

  return {cards};
};
