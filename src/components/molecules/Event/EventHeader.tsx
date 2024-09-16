import EventFilter from "./EventFilter";

const EventHeader = () => {
  return (
    <section className="w-full flex flex-col sm:flex-row items-center justify-between md:px-4">
      <h2 className="text-[#222222] font-bold text-3xl md:text-5xl">
        Upcoming Events
      </h2>
      <EventFilter />
    </section>
  );
};

export default EventHeader;
