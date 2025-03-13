import "./Home.scss";
import Button from "@/components/Button";
import Header from "@/components/Header";
import SlideItem from "@/components/SliderItem";
import WorkProcessContentItem from "@/components/WorkProcessContentItem";

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

        {/* Work Process section */}
        <section className="work-process" id="work-process">
          <div className="container work-process_container">
            <h2 className="work-process_title">
              How it
              <span className="work-process_subtitle"> works?</span>
            </h2>
            <div className="work-process_content">
              <WorkProcessContentItem
                title="Language chousing"
                text="LoremLoremLoremLoremLoremLoremLoremLoremLorem 
                LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
                path="#"
                buttonText="Chouse Language"
                img="/process-img.png"
              />
              <WorkProcessContentItem
                title="Uploading audio or video file"
                text="LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLoremL"
                path="#"
                buttonText="Upload file"
                img="/process-img.png"
              />
              <WorkProcessContentItem
                title="Find out what to do"
                text="LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
                path="#"
                buttonText="Give command"
                img="/process-img.png"
              />
              <WorkProcessContentItem
                title="Download your file"
                text="LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem"
                path="#"
                buttonText="Download file"
                img="/process-img.png"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
