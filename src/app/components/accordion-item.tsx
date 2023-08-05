import React, {useState} from "react";

type AccordionItemProps = {
  title: string;
  children: React.ReactNode;
};

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 border-b border-gray-200"
      >
        {title}
      </button>
      {isOpen && (
        <div className="mt-2 bg-white p-4 rounded-lg shadow-md border-b border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};
