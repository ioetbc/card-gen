import {Chevron} from "@/app/icons/chevron";
import React, {useState} from "react";
import ReactSelect, {
  components,
  CSSObjectWithLabel,
  DropdownIndicatorProps,
} from "react-select";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
};

// const CustomDropdownIndicator: React.FC<
//   DropdownIndicatorProps<Option, false>
// > = (props) => {
//   return (
//     <components.DropdownIndicator {...props}>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 30"
//         version="1.1"
//         x="0px"
//         y="0px"
//         width={14}
//       >
//         <title>Chevron</title>
//         <desc>Created with Sketch.</desc>
//         <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
//           <g
//             transform="translate(1.000000, 6.000000)"
//             fill="#000000"
//             fill-rule="nonzero"
//           >
//             <path d="M11,9.5749218 L20.0801685,0.843990586 C20.3787473,0.556895555 20.8535298,0.566205016 21.1406248,0.864783847 C21.4277198,1.16336268 21.4184104,1.63814515 21.1198315,1.92524018 L11.5224011,11.1535387 C11.5215486,11.1543673 11.5206945,11.1551934 11.519839,11.1560172 C11.2274863,11.4371106 10.7662181,11.4340545 10.4775989,11.1535387 L0.880168463,1.92524018 C0.581589631,1.63814515 0.572280171,1.16336268 0.859375201,0.864783847 C1.14647023,0.566205016 1.62125271,0.556895555 1.91983154,0.843990586 L11,9.5749218 Z" />
//           </g>
//         </g>
//       </svg>
//     </components.DropdownIndicator>
//   );
// };

const styles = {
  dropdownIndicator: (provided: CSSObjectWithLabel) => ({
    ...provided,
    padding: 0,
    margin: 0,
    display: "none",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
};

export const Select = ({options}: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  return (
    <div className="App">
      <ReactSelect
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        styles={styles}
        placeholder="Select a style"
        // components={{DropdownIndicator: CustomDropdownIndicator}}
      />
    </div>
  );
};
