import React from "react";
import { FieldErrors, FieldValues } from "react-hook-form";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

type DatePickerFieldProps = {
  id: string;
  name: string;
  label: string;
  value: DateValueType;
  placeholder?: string;
  defaultValue?: string;
  dark?: boolean;
  asSingle?: boolean;
  errors: FieldErrors<FieldValues>;
  onChange?: (
    value: DateValueType,
    e?: HTMLInputElement | null | undefined
  ) => void;
  rules: {
    required?: string;
    maxLength?: { value: number; message: string };
    minLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
  };
};

const DatePickerField: React.FC<DatePickerFieldProps> = (props) => {
  const {
    id,
    name,
    value,
    label,
    placeholder,
    onChange,
    errors,
    rules,
    dark,
    asSingle,
  } = props;

  return (
    <div className="w-full relative">
      <label
        htmlFor={id}
        className={`block font-medium text-opacity-70 text-sm sm:text-base tracking-wider sm:mb-4 ${
          dark ? "text-white" : "text-gray-800"
        }`}
      >
        {label}
      </label>
      <Datepicker
        inputId={id}
        inputName={name}
        value={value}
        primaryColor="purple"
        displayFormat="MMM DD, YYYY"
        onChange={onChange ? onChange : () => {}}
        asSingle={asSingle}
        placeholder={placeholder}
        required={rules.required ? true : false}
        inputClassName={`my-1 w-full py-2 bg-transparent border-b border-primary focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-xl font-medium sm:placeholder:text-2xl ${
          dark
            ? "placeholder:text-white placeholder:text-opacity-70 text-white text-opacity-90"
            : "placeholder-gray-400 text-gray-800 placeholder:text-gray-400"
        } transition-all duration-300`}
      />
      {errors[id] && (
        <span
          className={`text-base absolute top-full left-0 ${
            dark ? "text-red-400 text-opacity-70" : "text-red-500"
          }`}
        >
          {errors[id].message?.toString()}
        </span>
      )}
    </div>
  );
};

export default DatePickerField;
