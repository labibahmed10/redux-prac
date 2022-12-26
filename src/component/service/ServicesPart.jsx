import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const ServicesPart = () => {
   const [services, setSetvice] = useState([]);

   useEffect(() => {
      fetch("service.json")
         .then((res) => res.json())
         .then((data) => setSetvice(data));
   }, []);

   return (
      <div className="lg:py-20 py-10 lg:px-60 px-4">
         <h1 className="lg:text-[42px] text-[24px] lg:pb-10 pb-5 font-bold text-center">
            We Will Give You The Best Service
         </h1>
         <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-16 gap-10">
            {services.map((ser, i) => (
               <ServiceCard key={i} ser={ser} />
            ))}
         </div>
      </div>
   );
};

export default ServicesPart;
