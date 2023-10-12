import React, {useMemo, useState} from "react";
import {useFirestoreUpdate} from "../hooks/use-update-card-message";
import {useUserId} from "../hooks/use-user-id";

type CardMessageProps = {
  activeTab: string;
  message: string;
  setMessage: (value: string) => void;
  id: string;
};

export const CardMessage = ({
  activeTab,
  message,
  setMessage,
  id,
}: CardMessageProps) => {
  const {updateCardMessage, loading, error} = useFirestoreUpdate();
  const userId = useUserId();

  const handleInputChange =
    <T extends HTMLInputElement | HTMLTextAreaElement>(
      setter: (value: string) => void
    ) =>
    (event: React.ChangeEvent<T>) => {
      if (!event.target.value.length) return;
      setter(event.target.value);
    };

  const handleBlurMessage = () => {
    // update firstore record
    updateCardMessage({
      userId,
      id,
      message,
    });
  };

  return (
    <div className="flex flex-col justify-between h-full">
      <textarea
        placeholder="Happy birthday you blah blah blah blah blah blah"
        className="border border-blue-500 p-2 w-full h-full"
        value={message}
        onChange={handleInputChange(setMessage)}
        maxLength={125}
        onBlur={handleBlurMessage}
      ></textarea>
    </div>
  );
};
