import "./Home.scss";
import Button from "@/components/Button";
import Header from "@/components/Header";
import SlideItem from "@/components/SliderItem";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero section */}
        <section className="hero">
          <div className="container hero_container">
            <div className="hero_info">
              <h1 className="hero_title">
                Your AI-Powered
                <span className="hero_subtitle"> Design</span> Assistant
              </h1>
              <p className="hero_text">
                LoremLoremLoremLoremLoremLorem LoremLoremLoremLorem
                LoremLoremLoremLoremLoremLoremLoremLoremLorem
              </p>
              <Button path="#contact" text="Start now" />
            </div>
            <div className="hero_img">
              <img src="/hero-img.png" alt="" />
            </div>
          </div>
        </section>

        {/* Slider section */}
        <section className="slider">
          <div className="container slider_container">
            <SlideItem image="/slide-1.png" />
            <SlideItem image="/slide-2.png" />
            <SlideItem image="/slide-3.png" />
            <SlideItem image="/slide-4.png" />
            <SlideItem image="/slide-5.png" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
