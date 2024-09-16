import { useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";
import { DateValueType } from "react-tailwindcss-datepicker";
import DatePickerField from "../fields/DatePickerField";
import useSearchForm from "../../hooks/useSearchForm";
import InputField from "../fields/InputField";

const SearchForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
    setError,
  } = useForm();
  const { onSubmit, clearAllError, dateRange, setDateRange } = useSearchForm(
    setError,
    clearErrors
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-14 bg-dark-purple container mx-auto px-8 rounded-2xl"
    >
      <div className="my-8 w-full">
        <InputField
          id="searchTitle"
          name="searchTitle"
          label="Looking for"
          type="text"
          dark={true}
          placeholder="Any Concert"
          register={register}
          errors={errors}
          rules={{}}
          onChange={() => clearAllError()}
        />
      </div>
      <div className="bg-white bg-opacity-5 w-full h-[1px] sm:w-[1px] sm:h-[150px]"></div>
      <div className="my-8 w-full">
        <DatePickerField
          id="searchDate"
          name="searchDate"
          label="When"
          value={dateRange}
          dark={true}
          placeholder="Any date"
          errors={errors}
          rules={{}}
          onChange={(value: DateValueType) => {
            setDateRange(value);
            clearAllError();
          }}
        />
      </div>
      <div className="bg-white bg-opacity-5 w-full h-[1px] sm:w-[1px] sm:h-[150px]"></div>
      <div className="my-8 w-full">
        <InputField
          id="searchLocation"
          name="searchLocation"
          label="In"
          type="text"
          dark={true}
          placeholder="Any Place"
          register={register}
          errors={errors}
          rules={{}}
          onChange={() => clearAllError()}
        />
      </div>
      <button className="bg-primary text-white p-7 rounded-xl flex items-center justify-center text-2xl sm:text-3xl transition-all duration-300 hover:bg-opacity-80 active:bg-opacity-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 w-full sm:w-fit mb-8 sm:mb-0">
        <IoSearchSharp />
      </button>
    </form>
  );
};

export default SearchForm;
