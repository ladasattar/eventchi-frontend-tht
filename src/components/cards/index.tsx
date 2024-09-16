import React from "react";

type CardProps = {
  content: React.ReactNode;
  onClick: () => void;
};

const Card: React.FC<CardProps> = (props) => {
  const { content, onClick } = props;

  return (
    <div
      className="bg-white shadow-sm rounded-xl w-full cursor-pointer overflow-hidden"
      onClick={onClick}
    >
      {content}
    </div>
  );
};

export default Card;
