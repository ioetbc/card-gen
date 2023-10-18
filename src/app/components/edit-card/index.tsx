import React, {useRef, useState} from "react";
import Image from "next/image";

import {EFontFamily, TEditFrontCard, TEditInsideCard} from "../../types";
import {Button} from "../buttons/primary-button";
import {Input} from "../inputs/input";
import {Tabs} from "./tabs";
import {ColorSwatches} from "./color-swatches";
import {Alignment} from "./alignment";
import {MESSAGE_COLORS} from "@/app/constants";
import {isValid} from "postcode";

type CardProps = {
  id: string;
  image: string;
  checkoutURL: string;
  frontMessage: TEditFrontCard;
  insideMessage: TEditInsideCard;
  postcode: string | null;
  setPostcode: (value: string) => void;
  setFrontMessage: (value: TEditFrontCard) => void;
  setInsideMessage: (value: TEditInsideCard) => void;
};

export const Card = ({
  image,
  checkoutURL,
  id,
  postcode,
  setPostcode,
  frontMessage,
  insideMessage,
  setFrontMessage,
  setInsideMessage,
}: CardProps) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [editCardShow, setEditCardShow] = useState(true);

  const cardRef = useRef<HTMLDivElement>(null);

  const handleToggleEditCard = () => {
    setEditCardShow(!editCardShow);
  };

  const handlePostcodeChange = (postcode: string) => {
    if (isValid(postcode)) {
      setPostcode(postcode);
    }
  };

  const handlePostcodeSearch = () => {
    // run postcode check using postcode package
    console.log("search for postcode", postcode);
  };

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
              <h2 className="text-xl">Edit card</h2>
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
                <p>Postcode</p>
                <div className="pb-4">
                  <Input
                    handleChange={handlePostcodeChange}
                    handleSubmit={handlePostcodeSearch}
                    placeholder="E27 9LF"
                    icon="search"
                    value={postcode}
                  ></Input>
                </div>
              </div>

              <div className="flex justify-end p-4">
                <Button
                  handleOnClick={handleToggleEditCard}
                  label="Purchase"
                  type="primary"
                  disabled={false}
                  loading={false}
                />
              </div>
            </>
          )}
        </div>

        {/* <div className="border border-gray-200 bg-white rounded-xl shadow-card">
          <div className="border-b border-gray-200">
            <div className="p-4">
              <h2 className="text-xl">Shipping details</h2>
            </div>
          </div>
          <div className="grid grid-cols-6 justify-items-end gap-4 p-4">
            <div className="col-span-4">
              <Input
                handleChange={(value) => console.log(value)}
                handleSubmit={() => console.log("submitted")}
                placeholder="SE267 9LF"
                icon="search"
              ></Input>
            </div>

            <div className="col-span-2">
              <Button
                handleOnClick={() => console.log("search for postcode")}
                label="Search"
                type="primary"
                disabled={false}
                loading={true}
              />
            </div>
          </div>
          {/* <div className="border-t border-gray-200">
            <div className="p-4">
              <p>address line 1</p>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="p-4">
              <p>address line 2</p>
            </div>
          </div>
          <div className="border-t border-gray-200">
            <div className="p-4">
              <p>address line 3</p>
            </div>
          </div>
          <div className="px-4 py-4 flex flex-col gap-2 border-t border-gray-200">
            <Button
              size="fit"
              label="Purchase"
              type="primary"
              handleOnClick={handlePurchase}
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};
