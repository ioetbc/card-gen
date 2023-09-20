import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import "../toast.css";

type ToastProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  description: string;
};

export const Toast = ({open, setOpen, description}: ToastProps) => {
  return (
    <RadixToast.Provider swipeDirection="down">
      <RadixToast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <RadixToast.Description>{description}</RadixToast.Description>
      </RadixToast.Root>
      <RadixToast.Viewport className="ToastViewport" />
    </RadixToast.Provider>
  );
};
