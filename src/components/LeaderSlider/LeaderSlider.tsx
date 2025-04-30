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
      slidesPerView={4}
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
        <SlideItem image="/images/leader-one.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/leader-two.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/leader-three.jpg" />
      </SwiperSlide>
      <SwiperSlide>
        <SlideItem image="/images/leader-four.jpg" />
      </SwiperSlide> 
    </Swiper>
    </div>
  );
};

export default LeaderSlider;
