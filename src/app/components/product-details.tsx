import Image from "next/image";
import React, {useEffect, useState} from "react";
import {BottomSheet} from "react-spring-bottom-sheet";
import {TProduct} from "../types";
import {PrimaryButton} from "./buttons/primary-button";
import {useCheckoutSession} from "../hooks/use-checkout-session";

type ProductDetailsProps = {
  product: TProduct;
  handleClose: () => void;
};

const ProductDisplay = () => {
  const checkout = useCheckoutSession();

  useEffect(() => {
    if (checkout?.data?.url) {
      window.location.assign(checkout?.data?.url);
    }
  }, [checkout?.data?.url]);

  const handleCheckout = async () => {
    checkout.mutate();
  };

  return (
    <section>
      <div className="product">
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <form onSubmit={handleCheckout} method="POST">
        <button type="submit">Checkout</button>
      </form>
    </section>
  );
};

const Message = ({message}: {message: string}) => (
  <section>
    <p>{message}</p>
  </section>
);

export const ProductDetails = ({product, handleClose}: ProductDetailsProps) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const description =
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const price = 8;

  return (
    <BottomSheet
      open={!!product}
      onDismiss={handleClose}
      maxHeight={window?.innerHeight - 80}
    >
      <div className="md:flex md:gap-4 p-8">
        <div className="flex mb-8 md:mb-0">
          {product?.url && (
            <Image width={256} height={256} src={product.url} alt="card" />
          )}
        </div>
        <div className="flex flex-col gap-4 mb-16">
          <h1 className="text-4xl md:text-center">{product?.title}</h1>
          <p className="text-xl">{description}</p>
          <p className="text-xl">£{price}</p>
        </div>
        <PrimaryButton label="Purchase" handleOnClick={() => {}} />
      </div>
      {message ? <Message message={message} /> : <ProductDisplay />}
    </BottomSheet>
  );
};
