"use client";
import React from "react";
import {Button} from "../components/buttons/primary-button";

export default function PaymentSuccess() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center min-h-screen py-2 max-w-3xl mx-auto">
      <h2 className="text-2xl text-center">
        There was an error processing your payment. Please try again.
      </h2>
      <div>
        <Button
          label="Go home"
          handleOnClick={() => window.location.assign("/")}
          type="primary"
        />
      </div>
    </div>
  );
}
