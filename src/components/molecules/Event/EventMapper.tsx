import React from "react";
import EventCard from "./EventCard";
import EventDetail from "./EventDetail";
import useEventsHooks from "../../../hooks/useEventsHooks";
import EventsContext from "../../../context/eventsContext";
import { TbTimeDuration0, TbTimeDurationOff } from "react-icons/tb";
import { IEvent } from "../../../types/events.interface";
import { createPortal } from "react-dom";

const EventMapper = () => {
  const { getData, getEventDetails } = useEventsHooks();
  const { filteredEvents, isLoading, setEventDetail } =
    React.useContext(EventsContext);
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="my-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 px-4 lg:px-0">
          {!isLoading ? (
            filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  id={event.id}
                  date={event.date.toString()}
                  price={event.price}
                  image={event.image}
                  location={event.location}
                  title={event.title}
                  category={event.category}
                  onClick={() => {
                    setIsOpen(true);
                    getEventDetails(event.id, event.image);
                  }}
                />
              ))
            ) : (
              <div className="col-span-12 flex items-center justify-center gap-3 text-gray-400 py-20">
                <TbTimeDurationOff className="text-3xl" />
                <p className="text-center text-2xl font-semibold">
                  No Upcoming Events
                </p>
              </div>
            )
          ) : (
            <div className="col-span-12 flex items-center justify-center gap-3 text-gray-400 py-20">
              <TbTimeDuration0 className="text-3xl animate-spin" />
              <p className="text-center text-2xl font-semibold">Loading...</p>
            </div>
          )}
        </div>
      </section>
      {createPortal(
        <EventDetail
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false);
            setEventDetail({} as IEvent);
          }}
        />,
        document.body
      )}
    </>
  );
};

export default EventMapper;
