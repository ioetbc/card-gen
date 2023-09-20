import {db} from "../../firebase";

type GetCardRefProps = {
  userId: string;
};

export const getCardRef = ({userId}: GetCardRefProps) => {
  const ref = db.collection("user").doc(userId).collection("cards").doc();
  return ref;
};
