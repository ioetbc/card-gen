import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import "../toast.css";

function prettyDate(date: any) {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "full",
    timeStyle: "short",
  }).format(date);
}

type ToastProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  description: string;
};

export const Toast = ({open, setOpen, description}: ToastProps) => {
  const eventDateRef = React.useRef(new Date());
  const timerRef = React.useRef(0);

  React.useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  return (
    <RadixToast.Provider swipeDirection="down">
      <RadixToast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <RadixToast.Description>{description}</RadixToast.Description>
      </RadixToast.Root>
      <RadixToast.Viewport className="ToastViewport" />
    </RadixToast.Provider>
  );
};
