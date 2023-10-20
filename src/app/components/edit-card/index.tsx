import React, {useRef, useState} from "react";
import Image from "next/image";

import {
  TAddress,
  EFontFamily,
  TEditFrontCard,
  TEditInsideCard,
  TAddressMeta,
} from "../../types";
import {Button} from "../buttons/primary-button";
import {Input} from "../inputs/input";
import {Tabs} from "./tabs";
import {ColorSwatches} from "./color-swatches";
import {Alignment} from "./alignment";
import {MESSAGE_COLORS} from "@/app/constants";
import {isValid} from "postcode";
import {Postcode} from "../postcode";
import {usePostcodeLookup} from "@/app/hooks/use-postcode-lookup";

type CardProps = {
  id: string;
  image: string;
  checkoutURL: string;
  frontMessage: TEditFrontCard;
  insideMessage: TEditInsideCard;
  address: TAddress | null;
  setAddress: (value: TAddress | null) => void;
  setFrontMessage: (value: TEditFrontCard) => void;
  setInsideMessage: (value: TEditInsideCard) => void;
};

export const Card = ({
  image,
  checkoutURL,
  id,
  address,
  setAddress,
  frontMessage,
  insideMessage,
  setFrontMessage,
  setInsideMessage,
}: CardProps) => {
  const postcodeLookup = usePostcodeLookup();
  const [activeTab, setActiveTab] = useState("tab1");
  const [editCardShow, setEditCardShow] = useState(true);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleToggleEditCard = () => {
    setEditCardShow(!editCardShow);
  };

  const handlePostcodeChange = (postcode: string) => {
    console.log("postcode", postcode);
    if (!isValid(postcode)) return;
    postcodeLookup.mutateAsync({postcode});
  };

  const handleSelectAddress = (value: TAddress | null) => {
    console.log("selected address", value);
    if (!value) return;
    setAddress(value);
  };

  const handleAddressChange = ({key, value}: {key: any; value: any}) => {
    if (!key) return;
    if (!value) return;
    // setAddress({
    //   ...address,
    //   [key]: value,
    // });
  };

  console.log("address", address);

  const addresses = postcodeLookup?.data?.addresses ?? [];

  return (
    <div ref={cardRef} className="w-full">
      <div className="flex gap-8 flex-col">
        <div className="border bg-white shadow-card rounded-xl relative flex items-center justify-center h-[500px]">
          {activeTab === "tab1" ? (
            <>
              <div className="absolute top-8 w-4/5">
                <div
                  className={`text-${frontMessage.alignment} text-${
                    frontMessage.size
                  } ${MESSAGE_COLORS[frontMessage.color]}`}
                >
                  {frontMessage.value}
                </div>
              </div>
              <div className="relative w-full">
                <div className="h-full flex items-center justify-center">
                  <Image
                    src={image}
                    width={200}
                    height={200}
                    alt="card image"
                  />
                </div>
              </div>
            </>
          ) : (
            <div className="flex justify-around flex-col w-full h-full p-4">
              <p className={`${MESSAGE_COLORS[insideMessage.color]}`}>
                {insideMessage.value.header}
              </p>
              <p
                className={`text-center ${MESSAGE_COLORS[insideMessage.color]}`}
              >
                {insideMessage.value.body}
              </p>
              <p className={`${MESSAGE_COLORS[insideMessage.color]}`}>
                {insideMessage.value.footer}
              </p>
            </div>
          )}
        </div>

        <div className="border border-gray-200 bg-white rounded-xl shadow-card">
          <div className="border-b border-gray-200">
            <div className="p-4 flex justify-between">
              <h2 className="text-xl">Personalise card</h2>
              {!editCardShow && (
                <Image
                  src="pencil.svg"
                  width={20}
                  height={20}
                  alt="edit button"
                  onClick={handleToggleEditCard}
                />
              )}
            </div>
          </div>
          {editCardShow && (
            <>
              <Tabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tab1Content={
                  <div className="p-4 flex gap-2 flex-col border-b border-gray-200">
                    <p>Front message</p>
                    <div className="pb-4">
                      <Input
                        handleChange={(value) =>
                          setFrontMessage({...frontMessage, value})
                        }
                        handleSubmit={() => console.log("submitted")}
                        placeholder="Happy birthday Bob!"
                        icon="search"
                        value={frontMessage.value}
                      ></Input>
                    </div>

                    <div className="flex flex-col gap-4 justify-between">
                      <ColorSwatches
                        message={frontMessage}
                        setMessage={setFrontMessage}
                      />
                      <Alignment
                        message={frontMessage}
                        setMessage={setFrontMessage}
                      />
                      {/* <FontFamily
                    options={[
                      {label: "Helvetica", value: EFontFamily.HELVETICA},
                      {label: "Comic Sans", value: EFontFamily.COMIC_SANS},
                    ]}
                    message={frontMessage}
                    setFamily={setFrontMessage}
                    icon="search"
                    placeholder={EFontFamily.COMIC_SANS}
                  /> */}
                    </div>
                  </div>
                }
                tab2Content={
                  <div className="p-4 flex gap-2 flex-col border-b border-gray-200">
                    <div className="flex gap-2 flex-col">
                      <div className="flex gap-2 flex-col">
                        <p>Header</p>
                        <div className="pb-4">
                          <Input
                            handleChange={(value) =>
                              setInsideMessage({
                                ...insideMessage,
                                value: {
                                  ...insideMessage.value,
                                  header: value,
                                },
                              })
                            }
                            handleSubmit={() => console.log("submitted")}
                            placeholder="Happy birthday Bob!"
                            icon="search"
                            value={insideMessage.value.header}
                          ></Input>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-col">
                        <p>Body</p>
                        <div className="pb-4">
                          <Input
                            handleChange={(value) =>
                              setInsideMessage({
                                ...insideMessage,
                                value: {
                                  ...insideMessage.value,
                                  body: value,
                                },
                              })
                            }
                            handleSubmit={() => console.log("submitted")}
                            placeholder="Happy birthday Bob!"
                            icon="search"
                            value={insideMessage.value.body}
                          ></Input>
                        </div>
                      </div>
                      <div className="flex gap-2 flex-col">
                        <p>Footer</p>
                        <div className="pb-4">
                          <Input
                            handleChange={(value) =>
                              setInsideMessage({
                                ...insideMessage,
                                value: {
                                  ...insideMessage.value,
                                  footer: value,
                                },
                              })
                            }
                            handleSubmit={() => console.log("submitted")}
                            placeholder="Happy birthday Bob!"
                            icon="search"
                            value={insideMessage.value.footer}
                          ></Input>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 justify-between">
                      <ColorSwatches
                        message={insideMessage as any}
                        setMessage={setInsideMessage as any}
                      />
                      <Alignment
                        message={insideMessage as any}
                        setMessage={setInsideMessage as any}
                      />
                    </div>
                  </div>
                }
              />

              <div className="flex justify-end p-4">
                <Button
                  handleOnClick={handleToggleEditCard}
                  label="Next: Shipping"
                  type="primary"
                  disabled={false}
                  loading={false}
                />
              </div>
            </>
          )}
        </div>

        <div className="border border-gray-200 bg-white rounded-xl shadow-card">
          <div className="border-b border-gray-200">
            <div className="p-4 flex justify-between">
              <h2
                className={`text-xl ${
                  !editCardShow ? "text-black" : "text-gray-200"
                }`}
              >
                Shipping details
              </h2>
            </div>
          </div>
          {!editCardShow && (
            <>
              <div className="p-4 flex gap-2 flex-col border-b border-gray-200">
                {!address && <p>Postcode</p>}
                <div className="pb-4">
                  {!address && (
                    <Postcode
                      options={addresses}
                      loading={postcodeLookup.isLoading}
                      handlePostcodeChange={handlePostcodeChange}
                      handleSelectAddress={handleSelectAddress}
                    />
                  )}
                  {address && (
                    <div className="flex flex-col gap-2">
                      <Input
                        value={address.meta.line1}
                        handleChange={(value) =>
                          handleAddressChange({
                            key: "line1",
                            value,
                          })
                        }
                        placeholder="Address line 1"
                        handleSubmit={() => console.log("submitted")}
                      />
                      <Input
                        value={address.meta.line2}
                        handleChange={(value) =>
                          handleAddressChange({
                            key: "line1",
                            value,
                          })
                        }
                        placeholder="Address line 2"
                        handleSubmit={() => console.log("submitted")}
                      />
                      <Input
                        value={address.meta.city}
                        handleChange={(value) =>
                          handleAddressChange({
                            key: "line1",
                            value,
                          })
                        }
                        placeholder="City"
                        handleSubmit={() => console.log("submitted")}
                      />
                      <Input
                        value={address.meta.country}
                        handleChange={(value) =>
                          handleAddressChange({
                            key: "line1",
                            value,
                          })
                        }
                        placeholder="City"
                        handleSubmit={() => console.log("submitted")}
                      />
                      <Input
                        value={address.meta.postcode}
                        handleChange={(value) =>
                          handleAddressChange({
                            key: "line1",
                            value,
                          })
                        }
                        placeholder="Postcode"
                        handleSubmit={() => console.log("submitted")}
                      />
                      <p
                        className="underline text-right text-xs"
                        onClick={() => setAddress(null)}
                      >
                        Enter postcode
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-end p-4">
                <Button
                  handleOnClick={() => window.location.assign(checkoutURL)}
                  label="Purchase"
                  type="primary"
                  disabled={!address}
                  loading={false}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
