import { A11y, Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import CinHoney from "../assets/images/CINNAMON HONEY.jpeg";
import MangoHoney from "../assets/images/MANGO HONEY.jpeg";
import CocoOil from "../assets/images/COCONUT OIL.jpeg";
import HabHoney from "../assets/images/HONEY HABANERO.jpeg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const ProductCarousel = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[A11y, Navigation]}
      spaceBetween={50}
      slidesPerView={4}
      navigation={{ clickable: true }}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        900: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      }}
      className="px-12"
      id="swiper2"
    >
      <SwiperSlide className="flex flex-col items-center">
        <img
          src={CinHoney}
          alt="Cinnamon Honey"
          className="object-cover rounded-full mx-auto border-4 border-accent shadow-custom-white"
        />
        <h3 className="text-accent mt-4 max-sm:text-2xl">CINNAMON HONEY</h3>
        <p className=" max-sm:text-xl lg:text-[14px]">
          <span className="line-through">$12.00</span> $9.00
        </p>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center">
        <img
          src={CocoOil}
          alt="Cinnamon Honey"
          className="object-cover rounded-full mx-auto border-4 border-accent shadow-custom-white"
        />
        <h3 className="text-accent mt-4 max-sm:text-2xl">COCONUT OIL</h3>
        <p className="text-[14px]">
          <span className="line-through">$20.00</span> $15.00
        </p>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center">
        <img
          src={MangoHoney}
          alt="Cinnamon Honey"
          className="object-cover rounded-full mx-auto border-4 border-accent shadow-custom-white"
        />
        <h3 className="text-accent mt-4 max-sm:text-2xl">MANGO HONEY</h3>
        <p className="text-[14px]">
          <span className="line-through">$9.00</span> $6.00
        </p>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center">
        <img
          src={HabHoney}
          alt="Cinnamon Honey"
          className="object-cover rounded-full mx-auto border-4 border-accent shadow-custom-white"
        />
        <h3 className="text-accent mt-4 max-sm:text-2xl">HONEY HABANERO</h3>
        <p className="text-[14px]">
          <span className="line-through">$12.00</span> $9.00
        </p>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center">
        <img
          src={CocoOil}
          alt="Cinnamon Honey"
          className="object-cover rounded-full mx-auto border-4 border-accent shadow-custom-white"
        />
        <h3 className="text-accent mt-4 max-sm:text-2xl">COCONUT OIL</h3>
        <p className="text-[14px]">
          <span className="line-through">$20.00</span> $15.00
        </p>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center">
        <img
          src={HabHoney}
          alt="Cinnamon Honey"
          className="object-cover rounded-full mx-auto border-4 border-accent shadow-custom-white"
        />
        <h3 className="text-accent mt-4 max-sm:text-2xl">HONEY HABANERO</h3>
        <p className="text-[14px]">
          <span className="line-through">$12.00</span> $9.00
        </p>
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-center">
        <img
          src={MangoHoney}
          alt="Cinnamon Honey"
          className="object-cover rounded-full mx-auto border-4 border-accent shadow-custom-white"
        />
        <h3 className="text-accent mt-4 max-sm:text-2xl">MANGO HONEY</h3>
        <p className="text-[14px]">
          <span className="line-through">$9.00</span> $6.00
        </p>
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductCarousel;
