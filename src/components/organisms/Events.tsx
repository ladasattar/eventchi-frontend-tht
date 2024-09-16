import EventHeader from "../molecules/Event/EventHeader";
import EventMapper from "../molecules/Event/EventMapper";

const Events = () => {
  return (
    <section className="container mx-auto">
      <EventHeader />
      <EventMapper />
    </section>
  );
};

export default Events;
