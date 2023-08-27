import Image from "next/image";
import React from "react";
import {BottomSheet} from "react-spring-bottom-sheet";
import {TProduct} from "../types";
import {PrimaryButton} from "./buttons/primary-button";

type ProductDetailsProps = {
  product: TProduct;
  handleClose: () => void;
};

export const ProductDetails = ({product, handleClose}: ProductDetailsProps) => {
  const description =
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  const price = 8;

  return (
    <BottomSheet
      open={!!product}
      onDismiss={handleClose}
      maxHeight={window.innerHeight - 80}
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
    </BottomSheet>
  );
};
