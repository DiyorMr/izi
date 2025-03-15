import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "./CustomerStories.scss";

// import required modules
import { Autoplay } from "swiper/modules";

const CustomerStories = () => {
  const customerStoriesList = [
    {
      id: 1,
      avatar: "/user1.png",
      name: "John D.",
      story:
        "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLo remLoremLoremLoremLoremLoremLoremLoremLoremLoremLor emLoremLoremLoremLoremLoremLoremLorem",
    },
    {
      id: 2,
      avatar: "/user2.png",
      name: "Michael S.",
      story:
        "LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLo    remLoremLoremLoremLoremLoremLoremLoremLoremLoremLor emLoremLoremLoremLoremLoremLoremLorem",
    },
    {
      id: 3,
      avatar: "/user3.png",
      name: "John D.",
      story:
        "This tool is a game-changer! It’s incredibly intuitive and the results are always impressive. I can't imagine working without it now.",
    },
  ];

  return (
    <div className="customer-stories_wrapper">
      <Swiper
        slidesPerView={2}
        loop={true}
        speed={7000}
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
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {customerStoriesList.map((story) => (
          <SwiperSlide key={story.id}>
            <div className="customer-stories_card">
              <div className="card-header">
                <div className="card-image_wrapper">
                  <img src={story.avatar} alt={story.name} />
                </div>
                <h5 className="card-title">{story.name}</h5>
              </div>
              <p className="card-text">{story.story}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerStories;
