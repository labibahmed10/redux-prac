import React from "react";
import heroImage from "../assets/Hero.png";

const HeroSection = () => {
   return (
      <>
         <div className="w-full">
            <img src={heroImage} alt="" />
         </div>

         <aside className="bg-[#047267] lg:py-10 py-3 flex justify-center items-center lg:gap-20 gap-2">
            <div className="text-white lg:border-r-8 lg:border-r-white lg:pr-3">
               <h1 className="lg:text-[37px] text-[12px] font-bold">
                  <span className="lg:text-[50px] text-[16px]">01</span>+ Million
               </h1>
               <p className="text-[12px] font-[500]">Tickets Sold</p>
            </div>
            <div className="text-white lg:border-r-8 lg:border-r-white lg:pr-10">
               <h1 className="lg:text-[50px] text-[16px] font-bold">100</h1>
               <p>Routes</p>
            </div>
            <div className="text-white">
               <h1 className="lg:text-[37px] text-[12px] font-bold">
                  <span className="lg:text-[50px] text-[16px]">01</span>+ Million
               </h1>
               <p>App Downloads</p>
            </div>
         </aside>
      </>
   );
};

export default HeroSection;
