import React, {useState} from "react";

type CardMessageProps = {
  activeTab: string;
};

export const CardMessage = ({activeTab}: CardMessageProps) => {
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
      {/* <input
        placeholder="yo,"
        className="border border-blue-500 p-2 w-full"
        value={input1Value}
        onChange={handleInputChange(setInput1Value)}
      /> */}
      <textarea
        placeholder="Happy\n\nbirthday you blah blah blah blah blah blah"
        className="border border-blue-500 p-2 w-full h-full"
        value={textareaValue}
        onChange={handleInputChange(setTextareaValue)}
        maxLength={125}
        // onFocus={() => activeTab === "tab2"}
      ></textarea>
      {/* <input
        placeholder="cya,"
        className="border border-blue-500 p-2 w-full"
        value={input3Value}
        onChange={handleInputChange(setInput3Value)}
      /> */}
    </div>
  );
};
