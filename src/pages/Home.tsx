import "./Home.scss";
import Button from "@/components/Button";
import Header from "@/components/Header";

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
      </main>
    </>
  );
};

export default Home;
