import * as React from "react";
import * as RadixToast from "@radix-ui/react-toast";
import "../toast.css";
import {TToast} from "../types";

type ToastProps = {
  setToast: ({open, description, fill}: TToast) => void;
  toast: TToast;
};

export const Toast = ({setToast, toast}: ToastProps) => {
  return (
    <RadixToast.Provider swipeDirection="down">
      <RadixToast.Root
        className="ToastRoot"
        open={toast.open}
        style={{
          backgroundColor: `${toast.fill === "pink" ? "#e499df" : "red"}`,
        }}
        onOpenChange={() =>
          setToast({
            open: !toast.open,
            description: toast.description,
            fill: toast.fill,
          })
        }
      >
        <RadixToast.Description>{toast.description}</RadixToast.Description>
      </RadixToast.Root>
      <RadixToast.Viewport className="ToastViewport" />
    </RadixToast.Provider>
  );
};
