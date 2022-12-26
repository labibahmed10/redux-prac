import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = ({ ser }) => {
   const { image, text, name } = ser;
   return (
      <div className="bg-[#FFFFFF] lg:10 p-6 text-center rounded-3xl shadow-lg">
         <img className="mx-auto" src={image} alt="" />
         <h1 className="text-[#047267] lg:py-4 py-3 lg:text-[32px] text-[24px] font-bold">
            {name}
         </h1>
         <p className="text-[#535353] pb-5">{text}</p>
         <button className="text-[#047267] flex items-center font-bold mx-auto gap-2 justify-center">
            Get Service <AiOutlineArrowRight />
         </button>
      </div>
   );
};

export default ServiceCard;
