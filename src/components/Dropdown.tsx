import Select, { ActionMeta, SingleValue } from "react-select";

interface DropdownProps {
  height: number;
  placeholder: string;
  onChange?:
    | ((
        newValue: SingleValue<{
          value: string;
          label: string;
        }>,
        actionMeta: ActionMeta<{
          value: string;
          label: string;
        }>
      ) => void)
    | undefined;
  value?: { value: string; label: string };
  options: any;
  required?: boolean;
}

const Dropdown = ({
  height,
  placeholder,
  onChange,
  options,
  value,
  required,
}: DropdownProps) => {
  
  return (
    <Select
      defaultValue={value}
      required={required}
      options={options}
      placeholder={placeholder}
      onChange={onChange}
      isSearchable={true}
      theme={(theme) => ({
        ...theme,
        borderRadius: 10,
        border: 0,
        colors: {
          ...theme.colors,
          primary: "#8057D9",
        },
      })}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          backgroundColor: "rgba(246, 243, 253, 0.00)",
          height: height,
          border: state.isFocused ? 0 : 0,
          boxShadow: state.isFocused ? "0px" : "0px",
          "&:hover": {
            border: state.isFocused ? 0 : 0,
          },
        }),
        container: (base) => ({
          ...base,
          width: 'fit-content',
          height: height,
        }),
        valueContainer: (base) => ({
          ...base,
          background: "rgba(246, 243, 253, 0.00)",
          color: '#363062',
          width: '100%',
          height: height,
          padding: 0,
          alignItems: "center"
        }),
        singleValue: (base) => ({
          ...base,
          background: "rgba(246, 243, 253, 0.00)",
          color: '#363062',
          width: '100%',
          height: height,
          alignItems: "center",
        }),
        input: (base) => ({
          ...base,
          background: "rgba(246, 243, 253, 0.00)",
          color: '#363062',
          height: height,
          alignItems: "center",
          paddingTop: 0,
          paddingBottom: 0,
          marginTop: 0,
          marginBottom: 0,
        }),
        indicatorsContainer: (base) => ({
          ...base,
          padding: 2
        }),
        indicatorSeparator: (base) => ({
          ...base,
          display: "none"
        }),
      }}
    />
  );
};

export default Dropdown;
