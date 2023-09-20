import React, {useState} from "react";

export const CardMessage = () => {
  const [input1Value, setInput1Value] = useState("");
  const [textareaValue, setTextareaValue] = useState("");
  const [input3Value, setInput3Value] = useState("");

  const handleInputChange =
    <T extends HTMLInputElement | HTMLTextAreaElement>(
      setter: (value: string) => void
    ) =>
    (event: React.ChangeEvent<T>) => {
      setter(event.target.value);
    };

  return (
    <div className="flex flex-col justify-between h-full">
      <input
        placeholder="yo,"
        className="border border-blue-500 p-2 w-full"
        value={input1Value}
        onChange={handleInputChange(setInput1Value)}
      />
      <textarea
        placeholder="Happy birthday you blah blah blah"
        className="border border-blue-500 p-2 w-full h-[160px]"
        value={textareaValue}
        onChange={handleInputChange(setTextareaValue)}
        maxLength={125}
      ></textarea>
      <input
        placeholder="cya,"
        className="border border-blue-500 p-2 w-full"
        value={input3Value}
        onChange={handleInputChange(setInput3Value)}
      />
    </div>
  );
};
