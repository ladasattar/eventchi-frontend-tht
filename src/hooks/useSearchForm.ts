import React from "react";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { DateValueType } from "react-tailwindcss-datepicker";

type SearchData = {
  [key: string]: string | undefined;
  title?: string;
  date?: string;
  location?: string;
};

const useSearchForm = (
  setError: (name: string, error: { type: string; message: string }) => void,
  clearErrors: (name?: string | string[]) => void
) => {
  const [dateRange, setDateRange] = React.useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const onSubmit: SubmitHandler<FieldValues> = (data: SearchData) => {
    let flag = 0;
    const payload: SearchData = {
      ...data,
      searchDate: dateRange?.startDate?.toString() || "",
    };

    Object.keys(payload).find((key) => {
      if (payload[key] === "" || !payload[key]) flag++;
    });

    if (flag === 3) {
      Object.keys(payload).map((key) =>
        setError(key, {
          type: "manual",
          message: "At least one field is required",
        })
      );

      return;
    }

    alert(
      "The search is not working yet but this is the payload: " +
        JSON.stringify(payload)
    );
  };

  const clearAllError = () => {
    clearErrors("searchTitle");
    clearErrors("searchDate");
    clearErrors("searchLocation");
  };

  return { onSubmit, clearAllError, dateRange, setDateRange };
};

export default useSearchForm;
