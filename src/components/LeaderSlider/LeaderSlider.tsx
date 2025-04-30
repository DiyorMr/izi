import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./LeaderSlider.scss";

// import required modules
import { Autoplay } from "swiper/modules";
import { LeaderItem } from "../LeaderItem";


const LeaderSlider = () => {
  return (
    <div className="leader-box">
      <h2 className="leader-title">We work with the industry leaders</h2>
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
          <LeaderItem image="/images/leader-one.jpg" title="WE DIGITAL" />
        </SwiperSlide>
        <SwiperSlide>
          <LeaderItem image="/images/leader-eight.png" title="ALPHA" />
        </SwiperSlide>
        <SwiperSlide>
          <LeaderItem image="/images/leader-three.jpg" title="OSNOVA" />
        </SwiperSlide>
        <SwiperSlide>
          <LeaderItem image="/images/leader-four.jpg" title="AIMLAB" />
        </SwiperSlide>
        
        <SwiperSlide>
          <LeaderItem image="/images/leader-one.jpg" title="WE DIGITAL" />
        </SwiperSlide>
        <SwiperSlide>
          <LeaderItem image="/images/leader-two.jpg" title="ALPHA" />
        </SwiperSlide>
        <SwiperSlide>
          <LeaderItem image="/images/leader-three.jpg" title="OSNOVA" />
        </SwiperSlide>
        <SwiperSlide>
          <LeaderItem image="/images/leader-four.jpg" title="AIMLAB" />
        </SwiperSlide>


      </Swiper>
    </div>
  );
};

export default LeaderSlider;
