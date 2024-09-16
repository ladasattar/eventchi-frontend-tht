import React from "react";
import Button from "../buttons";
import InputField from "../fields/InputField";
import Select from "react-tailwindcss-select";
import useEventsHooks from "../../hooks/useEventsHooks";
import DatePickerField from "../fields/DatePickerField";
import { Controller, useForm } from "react-hook-form";
import ModalContainer from "../modals/ModalContainer";

type NewEventFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const NewEventForm: React.FC<NewEventFormProps> = (props) => {
  const { isOpen, onClose } = props;
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm();
  const { submitEvent, date, setDate, category, setCategory, categoryOptions } =
    useEventsHooks({ reset, onClose });

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <form
        onSubmit={handleSubmit(submitEvent)}
        className="flex flex-col items-center justify-center gap-6 bg-white container mx-auto px-8 rounded-2xl py-4 sm:py-8 max-w-[720px]"
      >
        <h2 className="text-xl sm:text-3xl font-bold text-[#222222]">
          Create New Event
        </h2>
        <div className="flex flex-col sm:flex-row items-center w-full gap-4">
          <div className="w-full flex-1">
            <InputField
              id="title"
              name="title"
              label="Title"
              type="text"
              placeholder="Title of the event"
              register={register}
              errors={errors}
              rules={{
                required: "Title is required",
              }}
            />
          </div>
          <div className="w-full flex-1">
            <label
              htmlFor="category"
              className={`block font-medium text-opacity-70 tracking-wider sm:mb-4 text-gray-800`}
            >
              Category
            </label>
            <Select
              value={category}
              onChange={(value) => setCategory(value)}
              options={categoryOptions}
              primaryColor="purple"
              classNames={{
                menuButton: (open) =>
                  open
                    ? "bg-transparent text-[#222222] font-semibold text-lg placeholder-[#222222] placeholder:font-semibold focus:outline-none flex items-center cursor-pointer border-b border-primary"
                    : "cursor-pointer",
              }}
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center w-full gap-4">
          <div className="w-full">
            <Controller
              control={control}
              name="date"
              render={() => (
                <DatePickerField
                  id="date"
                  name="date"
                  label="When"
                  value={date}
                  placeholder="Select Date "
                  asSingle={true}
                  errors={errors}
                  rules={{
                    required: "Date is required",
                  }}
                  onChange={(date) => setDate(date)}
                />
              )}
            />
          </div>
          <div className="w-full">
            <InputField
              id="price"
              name="price"
              label="Ticket Price"
              type="number"
              placeholder="USD or leave empty for free"
              register={register}
              errors={errors}
              rules={{}}
            />
          </div>
        </div>
        <div className="w-full">
          <InputField
            id="location"
            name="location"
            label="In"
            type="text"
            placeholder="Location of the event"
            register={register}
            errors={errors}
            rules={{
              required: "Location is required",
            }}
          />
        </div>
        <div className="w-full flex justify-end mt-5">
          <Button onClick={() => {}} children="Create Event" />
        </div>
      </form>
    </ModalContainer>
  );
};

export default NewEventForm;
