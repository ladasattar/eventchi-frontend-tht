import React, { FormEvent } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type InputFieldProps = {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder?: string;
  defaultValue?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  extra?: string;
  dark?: boolean;
  onChange?: (event: FormEvent<HTMLInputElement>) => void;
  rules: {
    required?: string;
    maxLength?: { value: number; message: string };
    minLength?: { value: number; message: string };
    pattern?: { value: RegExp; message: string };
  };
};

const InputField: React.FC<InputFieldProps> = (props) => {
  const {
    id,
    name,
    label,
    type,
    placeholder,
    defaultValue,
    dark,
    errors,
    rules,
    register,
  } = props;

  return (
    <div className="w-full relative">
      <label
        htmlFor={id}
        className={`block font-medium text-opacity-70 tracking-wider text-sm sm:text-base sm:mb-4 ${
          dark ? "text-white" : "text-gray-800"
        }`}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        min={type === "number" ? 0 : ""}
        className={`mt-1 block w-full py-2 bg-transparent border-b border-primary focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-2xl font-medium mb-1 ${
          dark
            ? "placeholder:text-white placeholder:text-opacity-70 text-white text-opacity-90"
            : "placeholder-gray-400 text-gray-800 placeholder:text-gray-400"
        } transition-all duration-300`}
        {...register(name, rules)}
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

export default InputField;
