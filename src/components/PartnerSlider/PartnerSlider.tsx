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
      slidesPerView={5} 
      loop={true} 
      speed={5000}
      autoplay={{
        delay: 0, 
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
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
        <SlideItem image="/images/slide-1.png" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/slide-2.png" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/slide-3.png" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/slide-4.png" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/slide-5.png" />
      </SwiperSlide>
    </Swiper>
  );
};

export default PartnerSlider;
