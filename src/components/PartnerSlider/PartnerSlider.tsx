import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./PartnerSlider.scss";

// import required modules
import { Autoplay } from "swiper/modules";
import SlideItem from "../SliderItem";

const PartnerSlider = () => {
  return (
    <Swiper
      slidesPerView={5} // Harakat silliq bo‘lishi uchun auto ishlatamiz
      loop={true} // Cheksiz aylanish
      speed={5000} // Sekin va silliq harakat
      autoplay={{
        delay: 0, // To‘xtamasligi uchun
        disableOnInteraction: false,
      }}
      allowTouchMove={false} // Qo‘lda surish bloklanadi
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        520: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SlideItem image="/slide-1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/slide-2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/slide-3.png" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/slide-4.png" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/slide-5.png" />
      </SwiperSlide>
    </Swiper>
  );
};

export default PartnerSlider;
