import { whyDrsticardArr, whyDrsticardArrOne } from "@/src/utils/about";
import React from "react";
import WhyDrsti from "../card/about/WhyDrsti";
import WhyDristOneCard from "../card/about/whyDristOneCard";
import { contactFormImg } from "@/src/assets/landinPage";

function WhyChoose() {
  return (
    <section className="w-full  flex flex-col items-center justify-start !lg:my-24">
      <div className="w-full !h-full main-container flex flex-col lg:flex-row items-center justify-start gap-6">
        <div className="w-full flex flex-col items-start justify-start gap-6">
          <h1 className="text-2xl lg:text-4xl font-bold text-red-600">
            <span className="text-black uppercase">why choose </span> dRSTi?
          </h1>
          <p className="w-full lg:w-3/4 lg:text-lg ">
            {" "}
            dRSTi offers exclusive media and brand experience zones in large IT Parks, Corporate campuses, and business hubs across India. We specialize in creating unique and engaging advertising experiences that leave a lasting impression on influential, high-value, and hard-to-reach working professionals. <br/>
            With its captive audience and high engagement rates, workplace marketing can help you increase brand recognition and drive sales at scale in brand-safe, contextually-relevant environments throughout the day where upscale professionals work.
          </p>
          <div className="w-full h-full grid grid-cols-1 gap-6 lg:px-16 lg:mt-8">
            {whyDrsticardArr.map((item) => (
              <div key={item.id}>
                <WhyDrsti item={item} />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full h-[48rem] flex flex-col items-center justify-center gap-2">
          <div className="p-4 w-full h-full border border-red-600">
            <img
              src={contactFormImg.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
   
    </section>
  );
}

export default WhyChoose;
