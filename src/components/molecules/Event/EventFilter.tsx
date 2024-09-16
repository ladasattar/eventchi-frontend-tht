import React from "react";
import Select from "react-tailwindcss-select";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import { IoCalendarOutline } from "react-icons/io5";
import useEventsHooks from "../../../hooks/useEventsHooks";

const options = [
  { value: "all", label: "Any Category" },
  { value: "music", label: "Music" },
  { value: "sports", label: "Sports" },
  { value: "food", label: "Food" },
  { value: "technology", label: "Technology" },
];

const EventFilter = () => {
  const { handleFilter } = useEventsHooks();
  const [dateRange, setDateRange] = React.useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const [category, setCategory] = React.useState<{
    value: string;
    label: string;
  }>(options[0]);

  return (
    <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-10 sm:mt-0">
      <div className="bg-[#EFEFF4] rounded-xl p-4">
        <Datepicker
          onChange={(date) => {
            setDateRange(date);
            handleFilter(date, category.value);
          }}
          value={dateRange}
          placeholder="Any date"
          displayFormat="MMM DD, YYYY"
          primaryColor="purple"
          toggleIcon={() => (
            <IoCalendarOutline className="text-primary text-lg" />
          )}
          inputClassName="bg-transparent text-[#222222] font-semibold text-lg placeholder-[#222222] placeholder:font-semibold focus:outline-none"
        />
      </div>
      <div className="bg-[#EFEFF4] rounded-xl p-2 w-full min-w-48">
        <Select
          value={category}
          onChange={(value) => {
            const categoryValue = value as { value: string; label: string };
            setCategory(categoryValue);
            handleFilter(dateRange, categoryValue.value);
          }}
          options={options}
          primaryColor="purple"
          classNames={{
            menuButton: (open) =>
              open
                ? "bg-transparent text-[#222222] font-semibold text-lg placeholder-[#222222] placeholder:font-semibold focus:outline-none flex items-center cursor-pointer"
                : "cursor-pointer",
          }}
        />
      </div>
    </div>
  );
};

export default EventFilter;
