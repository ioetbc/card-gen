import {isValid} from "postcode";
import Select from "react-select";
import {usePostcodeLookup} from "../hooks/use-postcode-lookup";
import {TAddress} from "../types";
import {useState} from "react";

type Option = {
  value: string;
  label: string;
};

type AddressProps = {
  options: Option[];
  loading: boolean;
  handlePostcodeChange: (value: string) => void;
  handleSelectAddress: (value: TAddress | null) => void;
};

const DropdownIndicator = () => null;
const IndicatorSeparator = () => null;

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
    color: "lightGray",
  }),
};

export const Postcode = ({
  options,
  loading,
  handlePostcodeChange,
  handleSelectAddress,
}: AddressProps) => {
  const [postcode, setPostcode] = useState<string | null>(null);

  const onChange = (value: string) => {
    setPostcode(value.toUpperCase());
    handlePostcodeChange(value);
  };
  return (
    <div style={{width: "100%"}}>
      <Select<Option>
        options={options}
        name="postcode"
        onInputChange={onChange}
        onChange={(value) => handleSelectAddress(value as TAddress)}
        isLoading={loading}
        filterOption={() => true}
        inputValue={postcode ?? undefined}
        placeholder={"SE5 8QJ"}
        components={{
          DropdownIndicator,
          IndicatorSeparator,
        }}
        styles={customStyles}
      />
    </div>
  );
};
