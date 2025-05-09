import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./LeaderSlider.scss";
import { Autoplay } from "swiper/modules";
import { LeaderItem } from "../LeaderItem";

const slides = [
  { image: "/images/leader-one.jpg", title: "WE DIGITAL" },
  { image: "/images/leader-eight.png", title: "ALPHA" },
  { image: "/images/leader-three.jpg", title: "OSNOVA" },
  { image: "/images/leader-four.jpg", title: "AIMLAB" },
  { image: "/images/leader-two.jpg", title: "ALPHA" },
];

// 12 tagacha slayd bo'lishi uchun ko'paytirib oldik
const repeatedSlides = [...slides, ...slides, ...slides.slice(0, 2)];

const LeaderSlider = () => {
  return (
    <div className="leader-box">
      <h2 className="leader-title">We work with the industry leaders</h2>
      <div className="box-leader">
        <Swiper
          className="mySwiper" // className qo'shildi
          slidesPerView={5}
          loop={true}
          speed={3000} // Tezlikni 3000 ga tushirish
          autoplay={{
            delay: 1, // delay 1 qilib o'zgartirildi
            disableOnInteraction: false,
          }}
          loopAdditionalSlides={10} // 10 ta qo'shimcha slayd
          allowTouchMove={false}
          modules={[Autoplay]}
        >
          {repeatedSlides.map((item, idx) => (
            <SwiperSlide key={idx}>
              <LeaderItem image={item.image} title={item.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default LeaderSlider;
