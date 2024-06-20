import { Pagination, A11y, EffectFlip, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";

const ShopCTA = () => {
  return (
    <div className="h-[50vh] w-full relative">
      <Swiper
        // install Swiper modules
        modules={[Autoplay, Pagination, A11y, EffectFlip]}
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="flip"
        className="h-full"
        id="swiper3"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
      <div className="absolute bg-600 top-[10%] left:[4%] lg:left-[22%] z-50 text-black">
        <div className="flex flex-col justify-center items-center gap-10">
          <h3 className="text-xl lg:text-4xl">ONLINE ONLY</h3>
          <p className="text-xl lg:text-4xl text-center">
            GET 20% OFF YOUR ORDER OF $50 OR MORE <br />
            Use code <b>“Chef20”</b>
          </p>
          <button className="bg-transparent hover:bg-black w-[200px] lg:w-[359px] h-[50px] lg:h-[76px] text-black hover:text-white text-xl lg:text-2xl font-poppins font-normal border-[3px] border-black hover:border-none z-50">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopCTA;
