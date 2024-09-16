import React from "react";
import EventsContext from "../../../context/eventsContext";
import ModalContainer from "../../modals/ModalContainer";
import Skeleton from "react-loading-skeleton";
import { IoMdMap } from "react-icons/io";
import "react-loading-skeleton/dist/skeleton.css";
import Button from "../../buttons";

type EventDetailProps = {
  isOpen: boolean;
  onClose: () => void;
};

const EventDetail: React.FC<EventDetailProps> = (props) => {
  const { isOpen, onClose } = props;
  const { eventDetail } = React.useContext(EventsContext);

  return (
    <ModalContainer isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center justify-center gap-5 bg-white rounded-3xl w-full lg:max-w-[720px] overflow-hidden">
        <div className="relative h-56 md:h-96 w-full">
          {eventDetail.image ? (
            <img
              src={eventDetail.image}
              alt={eventDetail.title}
              className="object-cover w-full h-full"
            />
          ) : (
            <Skeleton
              className="h-full w-full absolute"
              style={{
                objectFit: "cover",
              }}
            />
          )}
        </div>
        {eventDetail.category && eventDetail.title ? (
          <div className="flex flex-col gap-3 w-full p-10 sm:p-16 !pt-2 pb-10 sm:pb-16">
            <span className="text-xs sm:text-sm text-white py-1 px-2 w-fit bg-primary rounded-lg font-semibold">
              {eventDetail.category?.charAt(0).toUpperCase() +
                eventDetail.category?.slice(1) || "All"}
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#222222]">
              {eventDetail.title}{" "}
              {eventDetail.title?.includes("club") ? "" : "Club Party"}
            </h2>
            <p className="sm:text-lg text-gray-500 flex items-center gap-2">
              <IoMdMap className="text-lg text-primary" />
              {eventDetail?.location}
            </p>
            <p className="sm:text-lg text-gray-700">
              {new Date(eventDetail.date)?.toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <p className="sm:text-lg text-green-900 font-semibold">
              {eventDetail.price
                ? parseInt(eventDetail.price?.toString())
                    .toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })
                    .replace(".00", "")
                : "Free"}
            </p>
            <div className="mt-10 flex justify-end">
              <Button
                onClick={() => {
                  alert("NFT Ticketing Coming Soon!");
                }}
                extra="bg-primary-dark hover:bg-primary"
                children="Verify NFT Ticket"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-3 w-full p-10 sm:p-16 !pt-2 pb-10 sm:pb-16">
            <Skeleton height={20} width={100} />
            <Skeleton height={30} width={200} />
            <Skeleton height={20} width={150} />
            <Skeleton height={20} width={150} />
            <Skeleton height={20} width={150} />
          </div>
        )}
      </div>
    </ModalContainer>
  );
};

export default EventDetail;
