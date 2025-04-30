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
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <SlideItem image="/images/slider1.jpg" title="We Digital" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/slider2.jpg" title="Alpha" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/slider3.jpg" title="Osnova" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/slider4.jpg" title="AimLab" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/slider1.jpg" title="We Digital" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/slider2.jpg" title="Alpha" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/slider3.jpg" title="Osnova" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/slider4.jpg" title="AimLab" />
      </SwiperSlide>
    </Swiper>
  );
};

export default PartnerSlider;
