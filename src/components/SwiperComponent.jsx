import { Pagination, A11y, EffectFlip } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-flip";
import "swiper/css/effect-fade";

const SwiperComponent = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, EffectFlip]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      effect="flip"
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      className="h-screen"
    >
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide></SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
