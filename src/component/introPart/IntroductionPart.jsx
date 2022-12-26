import React from "react";
import bus from "../../assets/bus.png";
import img1 from "../../assets/grp1.png";
import img2 from "../../assets/grp2.png";
import img3 from "../../assets/grp3.png";

const IntroductionPart = () => {
   return (
      <section className="flex lg:flex-row flex-col lg:justify-between gap-10 lg:py-20 py-10">
         <div
            className={
               "w-full lg:relative lg:py-0 py-5 lg:bg-[url('https://i.postimg.cc/sxjBq63h/group.png')] bg-no-repeat object-cover"
            }
         >
            <img
               className="lg:absolute object-fit lg:w-[220px] w-full top-[16%] left-[40%]"
               src={img1}
               alt=""
            />
            <img
               className="lg:absolute object-fit lg:w-[220px] w-full top-[25%] right-[16%]"
               src={img2}
               alt=""
            />
            <img
               className="lg:absolute object-fit lg:w-[220px] w-full bottom-[11%] left-[40%]"
               src={img3}
               alt=""
            />
            <img
               className="lg:absolute object-fit  lg:w-[220px] w-full top-[41%] left-[18%]"
               src={img2}
               alt=""
            />
         </div>

         <div className="lg:w-[85%] text-[#272F30] text-center py-5 lg:py-0 px-4">
            <h1 className="lg:text-[50px] text-[20px] font-bold">Why we are for you</h1>
            <p className="lg:text-[18px] text-[14px] font-bold pb-10">
               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
               Ipsum has been the industry's s tandard dummy text ever since the 1500s, when an
               unknown printer took a galley of type and scrambled it to make a type specimen book.
               It has survived not only five
            </p>

            <div className="flex justify-end">
               <img className="p-0" src={bus} alt="" />
            </div>
         </div>
      </section>
   );
};

export default IntroductionPart;
