import { ReactNode } from "react";
import BorderLineStyle from "../border-line-style/BorderLineStyle";

interface CardProps {
  icon?: ReactNode;
  heading?: string;
  content?: string;
  style?: string;
}

const Cards = ({ icon, heading, content, style }: CardProps) => {
  return (
    <div
      className={`bg-white rounded-lg p-6 max-w-sm transform transition-transform flex flex-col items-center text-center py-10 ${
        style ?? ""
      }`}
    >
      <div className="text-[#05bd93] text-4xl mb-5">{icon}</div>
      <h2 className="text-xl font-bold text-gray-800 mb-5">{heading}</h2>
      <BorderLineStyle />
      <p className="text-gray-600 mt-5">{content}</p>
    </div>
  );
};

export default Cards;
