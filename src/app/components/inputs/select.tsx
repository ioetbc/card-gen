import React from "react";
import {default as ReactSelect, components} from "react-select";
import {TArtisticStyle} from "@/app/types";
import Image from "next/image";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  state: TArtisticStyle | string;
  setState: (value: TArtisticStyle | string) => void;
  borderType: "left" | "right"; // new prop
  options: Option[];
  icon: string;
  placeholder: string;
};

// Custom dropdown indicator component
const DropdownIndicator = () => null;
const IndicatorSeparator = () => null;

const ValueContainer = ({children, ...props}: any) => {
  return (
    <components.ValueContainer {...props}>
      <div className="flex gap-4">
        {/* <Image
          src={`/${icon}.svg`}
          alt="Description for accessibility"
          width={20}
          height={20}
        /> */}
        {React.Children.map(children, (child) =>
          child && child.type !== components.DropdownIndicator ? child : null
        )}
      </div>
    </components.ValueContainer>
  );
};

export const Select = ({
  state,
  setState,
  borderType,
  options,
  icon,
  placeholder,
}: SelectProps) => {
  const handleChange = (option: any) => {
    setState(option.value as string);
    console.log("Artistic style", option.value);
  };

  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      padding: 0,
      minHeight: "auto",
      // @ts-ignore
      padding: "16px",
      border: "1px solid black",
      borderRadius:
        borderType === "left" ? "8px 0px 0px 0px" : "0px 8px 0px 0px",
      borderLeft: borderType === "right" ? "none" : undefined,
      borderBottom: "none",
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      padding: 0,
    }),
    input: (provided: any) => ({
      ...provided,
      margin: 0,
      padding: 0,
    }),
    singleValue: (provided: any) => ({
      ...provided,
      margin: 0,
      padding: 0,
      color: "black",
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: "black",
      // fontSize: "24px",
    }),
  };

  return (
    <div className="flex gap-4 w-full">
      <ReactSelect
        placeholder={placeholder}
        isSearchable={false}
        value={options.find((option) => option.value === state)}
        options={options}
        onChange={handleChange}
        components={{ValueContainer, DropdownIndicator, IndicatorSeparator}}
        className="w-full text-sm"
        classNamePrefix="react-select"
        styles={customStyles}
      />
    </div>
  );
};
