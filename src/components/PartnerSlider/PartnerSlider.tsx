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
      slidesPerView={7}
      loop={true}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SlideItem image="/images/item1.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/item2.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/item3.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/item4.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/item5.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/item6.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/item7.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/item8.svg" />
      </SwiperSlide>
    </Swiper>
  );
};

export default PartnerSlider;
