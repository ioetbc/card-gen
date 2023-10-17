import React, {useRef, useState} from "react";
import Image from "next/image";

import {TEditFrontCard, TEditInsideCard} from "../types";
import {Button} from "./buttons/primary-button";
import {Input} from "./inputs/input";
import {Tabs} from "./edit-card-tabs";

type CardProps = {
  id: string;
  image: string;
  checkoutURL: string;
  frontMessage: TEditFrontCard;
  insideMessage: TEditInsideCard;
  setFrontMessage: (value: TEditFrontCard) => void;
  setInsideMessage: (value: TEditInsideCard) => void;
};

export const Card = ({
  image,
  checkoutURL,
  id,
  frontMessage,
  insideMessage,
  setFrontMessage,
  setInsideMessage,
}: CardProps) => {
  const [activeTab, setActiveTab] = useState("tab1");
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={cardRef} className="w-full">
      <div className="flex gap-8 flex-col">
        <div className="border bg-white shadow-card rounded-xl relative flex items-center justify-center h-[500px]">
          {activeTab === "tab1" ? (
            <>
              <div className="absolute top-8 w-4/5">
                <div
                  className={`text-${frontMessage.alignment} text-${frontMessage.size} text-${frontMessage.color}-500`}
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
              <p>{insideMessage.value.header}</p>
              <p className="text-center">{insideMessage.value.body}</p>
              <p>{insideMessage.value.footer}</p>
            </div>
          )}
        </div>

        <div className="border border-gray-200 bg-white rounded-xl shadow-card">
          <div className="border-b border-gray-200">
            <div className="p-4">
              <h2 className="text-xl">Edit card</h2>
            </div>
          </div>
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
                  <div className="flex gap-2">
                    <div
                      className={`border rounded-md ${
                        frontMessage.color === "black"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setFrontMessage({...frontMessage, color: "black"})
                      }
                    >
                      <div className="w-6 h-6 bg-black rounded-md"></div>
                    </div>
                    <div
                      className={`border rounded-md ${
                        frontMessage.color === "blue"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setFrontMessage({...frontMessage, color: "blue"})
                      }
                    >
                      <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
                    </div>
                    <div
                      className={`border rounded-md ${
                        frontMessage.color === "green"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setFrontMessage({...frontMessage, color: "green"})
                      }
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-md"></div>
                    </div>
                    <div
                      className={`border rounded-md ${
                        frontMessage.color === "purple"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setFrontMessage({...frontMessage, color: "purple"})
                      }
                    >
                      <div className="w-6 h-6 bg-purple-500 rounded-md"></div>
                    </div>
                    <div
                      className={`border rounded-md ${
                        frontMessage.color === "red"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setFrontMessage({...frontMessage, color: "red"})
                      }
                    >
                      <div className="w-6 h-6 bg-red-500 rounded-md"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div
                      className={`border rounded-md ${
                        frontMessage.alignment === "left"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setFrontMessage({...frontMessage, alignment: "left"})
                      }
                    >
                      <Image
                        src="/text-align-left.svg"
                        width={24}
                        height={24}
                        alt="align text left"
                      />
                    </div>
                    <div
                      className={`border rounded-md ${
                        frontMessage.alignment === "center"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setFrontMessage({...frontMessage, alignment: "center"})
                      }
                    >
                      <Image
                        src="/text-align-center.svg"
                        width={24}
                        height={24}
                        alt="align text left"
                      />
                    </div>
                    <div
                      className={`border rounded-md ${
                        frontMessage.alignment === "right"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setFrontMessage({...frontMessage, alignment: "right"})
                      }
                    >
                      <Image
                        src="/text-align-right.svg"
                        width={24}
                        height={24}
                        alt="align text left"
                      />
                    </div>
                  </div>
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
                  <div className="flex gap-2">
                    <div
                      className={`border rounded-md ${
                        insideMessage.color === "black"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setInsideMessage({...insideMessage, color: "black"})
                      }
                    >
                      <div className="w-6 h-6 bg-black rounded-md"></div>
                    </div>
                    <div
                      className={`border rounded-md ${
                        insideMessage.color === "blue"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setInsideMessage({...insideMessage, color: "blue"})
                      }
                    >
                      <div className="w-6 h-6 bg-blue-500 rounded-md"></div>
                    </div>
                    <div
                      className={`border rounded-md ${
                        insideMessage.color === "green"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setInsideMessage({...insideMessage, color: "green"})
                      }
                    >
                      <div className="w-6 h-6 bg-green-500 rounded-md"></div>
                    </div>
                    <div
                      className={`border rounded-md ${
                        insideMessage.color === "purple"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setInsideMessage({...insideMessage, color: "purple"})
                      }
                    >
                      <div className="w-6 h-6 bg-purple-500 rounded-md"></div>
                    </div>
                    <div
                      className={`border rounded-md ${
                        insideMessage.color === "red"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setInsideMessage({...insideMessage, color: "red"})
                      }
                    >
                      <div className="w-6 h-6 bg-red-500 rounded-md"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <div
                      className={`border rounded-md ${
                        insideMessage.alignment === "left"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setInsideMessage({...insideMessage, alignment: "left"})
                      }
                    >
                      <Image
                        src="/text-align-left.svg"
                        width={24}
                        height={24}
                        alt="align text left"
                      />
                    </div>
                    <div
                      className={`border rounded-md ${
                        insideMessage.alignment === "center"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setInsideMessage({
                          ...insideMessage,
                          alignment: "center",
                        })
                      }
                    >
                      <Image
                        src="/text-align-center.svg"
                        width={24}
                        height={24}
                        alt="align text left"
                      />
                    </div>
                    <div
                      className={`border rounded-md ${
                        insideMessage.alignment === "right"
                          ? "border-black"
                          : "border-transparent"
                      } p-1`}
                      onClick={() =>
                        setInsideMessage({...insideMessage, alignment: "right"})
                      }
                    >
                      <Image
                        src="/text-align-right.svg"
                        width={24}
                        height={24}
                        alt="align text left"
                      />
                    </div>
                  </div>
                </div>
              </div>
            }
          />
          {/* <div className="p-4">
            <div className="border border-black flex rounded-lg bg-white">
              <div className="py-3 px-4 bg-gray-200 border-r border-black rounded-s-lg w-full text-center">
                Front of card
              </div>
              <div className="py-3 px-4 w-full text-center rounded-lg">
                Inside of card
              </div>
            </div>
          </div>

           */}

          <div className="flex justify-end p-4">
            <Button
              handleOnClick={() => console.log("search for postcode")}
              label="Next: Shipping"
              type="primary"
              disabled={false}
              loading={false}
            />
          </div>
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
