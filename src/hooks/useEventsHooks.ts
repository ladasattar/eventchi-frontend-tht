import React from "react";
import toast from "react-hot-toast";
import EventsContext from "../context/eventsContext";
import {
  createEvent,
  getEvent,
  getEvents,
  getUnsplashPhotos,
} from "../api/EventAPI";
import { SelectValue } from "react-tailwindcss-select/dist/components/type";
import { DateValueType } from "react-tailwindcss-datepicker";
import { FieldValues, UseFormReset } from "react-hook-form";
import { IEvent } from "../types/events.interface";

type UseEventHooksProps<T extends FieldValues> = {
  reset?: UseFormReset<T>;
  onClose?: () => void;
};

const options = [
  { value: "all", label: "Any Category" },
  { value: "music", label: "Music" },
  { value: "sports", label: "Sports" },
  { value: "food", label: "Food" },
  { value: "technology", label: "Technology" },
];

const useEventsHooks = <T extends FieldValues>({
  reset = () => {},
  onClose = () => {},
}: UseEventHooksProps<T> = {}) => {
  const { events, setEvents, setEventDetail, setFilteredEvents, setIsLoading } =
    React.useContext(EventsContext);
  const [category, setCategory] = React.useState<SelectValue>(options[0]);
  const [date, setDate] = React.useState<DateValueType>(null);

  const getData = async () => {
    setIsLoading(true);

    await getEvents()
      .then((response) => {
        getUnsplashPhotos().then((photos) => {
          const data = response.data.map((event: IEvent, index: number) => {
            return {
              ...event,
              image: photos.data.results[index]?.urls.regular,
            };
          });
          setEvents(data);
          setFilteredEvents(data);
        });
      })
      .catch(() => {
        toast.error("Failed to fetch events");
      });

    setIsLoading(false);
  };

  const getEventDetails = async (id: string, image: string) => {
    getEvent(id)
      .then((response) => {
        setEventDetail({ ...response.data, image });
      })
      .catch(() => {
        toast.error("Failed to fetch event details");
      });
  };

  const submitEvent = async (event: Partial<IEvent>) => {
    setIsLoading(true);

    const categoryValue = category as { value: string; label: string };
    const payload: Partial<IEvent> = {
      title: event.title,
      category: event.category || categoryValue?.value || "all",
      price: event.price === "" ? 0 : event.price,
      location: event.location,
      date: new Date(date?.startDate?.toString() || new Date().toString()),
    };

    const promise = createEvent(payload);
    toast.promise(promise, {
      loading: "Loading...",
      success: () => {
        getData();
        onClose();
        setCategory(options[0]);
        setDate({
          startDate: null,
          endDate: null,
        });
        reset();

        return "Event created!";
      },
      error: "Failed to create event",
    });

    setIsLoading(false);
  };

  const handleFilter = async (dateRange?: DateValueType, category?: string) => {
    setIsLoading(true);

    const normalizedStartDate = dateRange?.startDate
      ? new Date(dateRange.startDate.setHours(0, 0, 0, 0))
      : undefined;
    const normalizedEndDate = dateRange?.endDate
      ? new Date(dateRange.endDate.setHours(23, 59, 59, 999))
      : undefined;

    const filtered = events.filter((event) => {
      const isCategory = category
        ? category === "all" || event.category === category
        : true;
      const isDate =
        dateRange?.startDate && dateRange?.endDate
          ? new Date(event.date) >= normalizedStartDate! &&
            new Date(event.date) <= normalizedEndDate!
          : true;

      return isCategory && isDate;
    });

    setFilteredEvents(filtered);
    setIsLoading(false);
  };

  return {
    getData,
    submitEvent,
    date,
    setDate,
    category,
    setCategory,
    categoryOptions: options,
    handleFilter,
    getEventDetails,
  };
};

export default useEventsHooks;
