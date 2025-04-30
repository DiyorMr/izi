import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./LeaderSlider.scss";

// import required modules
import { Autoplay } from "swiper/modules";
import SlideItem from "../SliderItem";

const LeaderSlider = () => {
  return (
    <div className="leader-box">
        <h2  className="leader-title">We work with the industry leaders</h2>
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
    >
      <SwiperSlide>
        <SlideItem image="/images/leader-one.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/leader-two.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/leader-three.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/leader-four.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/leader-five.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/leader-six.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/leader-seven.svg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/leader-eight.svg" />
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default LeaderSlider;
