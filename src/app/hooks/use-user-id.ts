import {useState, useEffect} from "react";
import Cookies from "js-cookie";
import {uuid} from "uuidv4";

export const useUserId = (): string => {
  const [userId, setUserId] = useState<string>("");

  useEffect(() => {
    const existingUUID = Cookies.get("rubberducker-user-id");

    if (existingUUID) {
      setUserId(existingUUID);
    } else {
      const newUUID = uuid();
      Cookies.set("rubberducker-user-id", newUUID, {expires: 365});
      setUserId(newUUID);
    }
  }, []);

  return userId;
};
