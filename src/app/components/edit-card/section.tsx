import Image from "next/image";

type SectionProps = {
  isComplete: boolean;
  title: string;
};

export const Section = ({isComplete, title}: SectionProps) => {
  return (
    <div className="border border-gray-200 bg-white rounded-xl shadow-card">
      <div className="border-b border-gray-200">
        <div className="p-4 flex justify-between">
          <h2 className="text-xl">{title}</h2>
          {isComplete && (
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
      {!isComplete && (
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
  );
};
