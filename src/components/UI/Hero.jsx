import { Pagination, A11y, EffectFlip, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
const Hero = () => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Pagination, A11y, EffectFlip, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        effect="flip"
        className="h-screen"
        id="swiper1"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <div className="absolute bottom-[7%] w-full lg:pl-[10rem] flex items-center justify-center">
        <button className="bg-transparent hover:bg-accent w-[200px] lg:w-[359px] h-[76px] text-white text-xl lg:text-2xl font-poppins font-normal border-[3px] border-white hover:border-none z-50">
          Meet Chef Matt
        </button>
      </div>
    </>
  );
};

export default Hero;
