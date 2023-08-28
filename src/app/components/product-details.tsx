import Image from "next/image";
import React, {useEffect} from "react";
import {BottomSheet} from "react-spring-bottom-sheet";
import {TProduct} from "../types";
import {PrimaryButton} from "./buttons/primary-button";
import {useCheckoutSession} from "../hooks/use-checkout-session";

type ProductDetailsProps = {
  product: TProduct;
  handleClose: () => void;
};

export const ProductDetails = ({product, handleClose}: ProductDetailsProps) => {
  const checkout = useCheckoutSession();

  useEffect(() => {
    if (checkout?.data?.url) {
      window.location.assign(checkout?.data?.url);
    }
  }, [checkout?.data?.url]);

  const handleCheckout = async () => {
    checkout.mutate();
  };

  const description =
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const price = 8;

  return (
    <BottomSheet
      open={!!product}
      onDismiss={handleClose}
      maxHeight={window?.innerHeight - 80}
    >
      <div className="md:grid md:grid-cols-2 md:gap-4 p-8">
        <div className="flex mb-8 md:mb-0">
          {product?.url && (
            <Image width={500} height={500} src={product.url} alt="card" />
          )}
        </div>
        <div className="flex flex-col gap-4 mb-16">
          <h1 className="text-4xl">{product?.title}</h1>
          <p className="text-xl">{description}</p>
          <p className="text-xl">£{price}</p>
          <PrimaryButton label="Purchase" handleOnClick={handleCheckout} />
        </div>
      </div>
    </BottomSheet>
  );
};
