import React from "react";
import { IEvent } from "../../types/events.interface";

interface IEventsCtx {
  events: IEvent[];
  setEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
  filteredEvents: IEvent[];
  setFilteredEvents: React.Dispatch<React.SetStateAction<IEvent[]>>;
  eventDetail: IEvent;
  setEventDetail: React.Dispatch<React.SetStateAction<IEvent>>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventsContext = React.createContext<IEventsCtx>({} as IEventsCtx);

export default EventsContext;
