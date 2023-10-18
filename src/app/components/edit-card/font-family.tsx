import {EFontFamily, TEditFrontCard} from "@/app/types";
import Image from "next/image";
import React, {memo} from "react";
import {default as ReactSelect, components} from "react-select";

type FontFamilyType = {
  message: TEditFrontCard; // make this a generic
  setMessage: (value: TEditFrontCard) => void; // make this a generic
};

type Option = {
  value: EFontFamily;
  label: string;
};

type SelectProps = {
  message: TEditFrontCard;
  setFamily: (value: TEditFrontCard) => void;
  options: Option[];
  icon: string;
  placeholder: string;
};

// Custom dropdown indicator component
const DropdownIndicator = () => null;
const IndicatorSeparator = () => null;

export const FontFamily = memo(
  ({message, setFamily, options, icon, placeholder}: SelectProps) => {
    const handleChange = (option: Option) => {
      setFamily({...message, family: option.value});
    };

    const customStyles = {
      control: (provided: any) => ({
        ...provided,
        padding: 0,
        minHeight: "auto",
        // @ts-ignore
        padding: "16px",
        border: "1px solid black",
        borderRadius: "8px",
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
      }),
    };

    const ValueContainer =
      // eslint-disable-next-line react/display-name
      ({children, icon, ...props}: any) => {
        return (
          <components.ValueContainer {...props}>
            <div className="flex gap-4">
              <Image
                src={`/${icon}.svg`}
                alt="Description for accessibility"
                width={20}
                height={20}
              />
              {React.Children.map(children, (child) =>
                child && child.type !== components.DropdownIndicator
                  ? child
                  : null
              )}
            </div>
          </components.ValueContainer>
        );
      };

    return (
      <div className="flex gap-4 w-full">
        <ReactSelect
          placeholder={placeholder}
          isSearchable={false}
          value={options.find((option) => option.value === message.family)}
          options={options}
          onChange={(value) => (value ? handleChange(value) : null)}
          components={{
            ValueContainer: (props) => (
              <ValueContainer {...props} icon={icon} />
            ),
            DropdownIndicator,
            IndicatorSeparator,
          }}
          className="w-full text-sm"
          classNamePrefix="react-select"
          styles={customStyles}
        />
      </div>
    );
  }
);

FontFamily.displayName = "Select";
