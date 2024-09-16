import React from "react";
import EventsContext from ".";
import { IEvent } from "../../types/events.interface";

type EventsProviderProps = {
  children: React.ReactNode;
};

export const EventsProvider = ({ children }: EventsProviderProps) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [events, setEvents] = React.useState<IEvent[]>([]);
  const [filteredEvents, setFilteredEvents] = React.useState<IEvent[]>([]);
  const [eventDetail, setEventDetail] = React.useState<IEvent>({} as IEvent);

  const value = {
    events,
    setEvents,
    isLoading,
    setIsLoading,
    filteredEvents,
    setFilteredEvents,
    eventDetail,
    setEventDetail,
  };

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
};
