import React from "react";
import Hero from "./components/hero";
import Button from "./components/buttons";
import Footer from "./components/app/Footer";
import Events from "./components/organisms/Events";
import SearchForm from "./components/forms/SearchForm";
import NewEventForm from "./components/forms/NewEventForm";
import { useInView } from "react-intersection-observer";
import { createPortal } from "react-dom";
import { TbPlus } from "react-icons/tb";

function App() {
  const [isOpen, setIsOpen] = React.useState(false);
  const { ref, inView } = useInView({ threshold: 0.25 });

  return (
    <>
      <main className="relative">
        <Hero />
        <section className="-mt-20 z-10 px-4 lg:px-0">
          <SearchForm />
        </section>
        <section className="my-20 sm:my-36" ref={ref}>
          <Events />
        </section>
        <Button
          onClick={() => setIsOpen(true)}
          fullRounded={true}
          extra={`fixed right-5 sm:right-10 shadow-xl ${
            inView ? "bottom-5 sm:bottom-10" : "-bottom-20"
          }`}
          children={<TbPlus className="text-2xl sm:text-4xl" />}
        />
        <Footer />
      </main>
      {createPortal(
        <NewEventForm isOpen={isOpen} onClose={() => setIsOpen(false)} />,
        document.body
      )}
    </>
  );
}

export default App;
