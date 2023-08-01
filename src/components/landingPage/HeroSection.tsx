import { aim, bit, manage, secure, wp11 } from "@/src/assets/landinPage";
import { homeWorkplaceArr } from "@/src/utils/landingpage";
import React,{useState} from "react";
import Slider from "react-slick";
 import axios from "axios";
const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 3000,
};


function HeroSection() {
  const [activeIndex, setActiveIndex] =useState<number>()
  // const [post, setPost]=useState()

  // axios.get("/api/homecollects/").then((response) => {
  //   setPost(response.data)
  // })
  //  console.log(post)
  return (
    <section className="w-full main-container overflow-hidden flex flex-col items-center justify-center gap-10 lg:my-24 my-12">
      <div className="w-full h-auto">
        <h1 className="text-2xl lg:text-4xl text-black font-bold uppercase text-center mb-4 ">
          Workplace <span className="text-red-600">Marketing</span> 
        </h1>
        <p className="lg:text-lg text-black text-center ">
        This is the opportunity for your brand to influence the workplace!
        </p>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-6">
        <div className="w-full h-full">
        <Slider {...settings}>
       
          {
            homeWorkplaceArr.map((item)=>(
              <div key={item.id} className="w-full h-full center">
              <img src={item.img.src} alt="img" className="w-full h-full !object-cover " />
              
              </div>
            ))
          }
             {/* {
            post.map((item)=>(
              <div key={item.id} className="w-full h-full center">
              <img src={item.img.src} alt="img" className="w-full h-full !object-cover " />
              
              </div>
            ))
          } */}
         
          </Slider>
        </div>
        <div className="w-full flex flex-col items-start justify-center h-auto lg:h-full gap-6 ">
          <span className="flex gap-6">
            {" "}
            <img src={bit.src} alt="img" className="h-20 w-24" />
            <p className="lg:text-lg text-black ">
            Corporate professionals spend 10+ hours of their active day at workplaces
            </p>
          </span>
          <span className="flex gap-6">
            <img src={secure.src} alt="img" className="h-20 w-24" />
            <p className="lg:text-lg text-black ">
            They are surrounded by like-minded professionals, with whom they interact, discuss, research and share their experiences
            </p>
          </span>
          <span className="flex gap-6">
            <img src={aim.src} alt="img" className="h-20 w-24" />
            <p className="lg:text-lg text-black ">
            Audience which is actively seeking new engagements to break their monotonous routines
            </p>
          </span>
          <span className="flex gap-6">
            <img src={manage.src} alt="img" className="h-20 w-24" />
            <p className="lg:text-lg text-black ">
            Create trend-setting campaigns that can be scaled and amplified
            </p>
          </span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
