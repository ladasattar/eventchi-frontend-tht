import React from "react";
import Card from "../../cards";

type EventCardProps = {
  id: string;
  title: string;
  location: string;
  date: string;
  image: string;
  price?: number | string;
  category?: string;
  onClick: (id: string) => void;
};

const EventCard: React.FC<EventCardProps> = (props) => {
  const { id, title, location, date, image, price, category, onClick } = props;

  return (
    <Card
      onClick={() => onClick(id)}
      content={
        <div className="flex flex-col pb-8">
          <div className="relative">
            <img
              src={image}
              alt={title}
              className="object-cover w-full h-48 sm:h-60"
            />
            <p className="absolute top-4 text-xs sm:text-base left-4 bg-white rounded-lg py-2 px-3 font-bold text-[#222222] uppercase">
              {price
                ? parseInt(price.toString())
                    .toLocaleString("en-EN", {
                      style: "currency",
                      currency: "USD",
                    })
                    .replace(",00", "")
                : "Free"}
            </p>
            <p className="absolute top-4 text-xs sm:text-base right-4 bg-white rounded-lg py-2 px-3 font-bold text-[#222222] uppercase">
              {category
                ? category.charAt(0).toUpperCase() + category.slice(1)
                : "All"}
            </p>
          </div>
          <div className="flex gap-6 pt-7 px-6">
            <div>
              <div className="flex flex-col items-center justify-center gap-2">
                <p className="text-primary uppercase font-medium sm:text-lg">
                  {new Date(date).toLocaleDateString("en-EN", {
                    month: "short",
                  })}
                </p>
                <p className="text-[#222222] font-bold text-2xl sm:text-3xl">
                  {new Date(date).getDate()}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-2xl mb-2 text-[#222222]">
                {title.charAt(0).toUpperCase() + title.slice(1)}{" "}
                {title.includes("club") ? "" : "Club Party"}
              </h3>
              <p className="sm:text-lg tracking-wide text-gray-500">
                {location}
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default EventCard;
