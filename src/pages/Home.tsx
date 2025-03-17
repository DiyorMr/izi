import { useEffect, useRef, useState } from "react";

import "./Home.scss";

import BenefitCard from "@/components/BenefitCard";
import Button from "@/components/Button";
import Header from "@/components/Header";
import WorkProcessContentItem from "@/components/WorkProcessContentItem";
import PlansCard from "@/components/PlansCard";
import CustomerStories from "@/components/CustomerStories";
import Accordion from "@/components/Accordion";
import ContactForm from "@/components/Form";
import Footer from "@/components/Footer";
import PartnerSlider from "@/components/PartnerSlider";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [progress, setProgress] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop;
        const sectionHeight = sectionRef.current.clientHeight;
        const scrollY = window.scrollY + window.innerHeight / 2;

        if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
          const progressPercent =
            ((scrollY - sectionTop) / sectionHeight) * 100;
          setProgress(progressPercent);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const benefits = [
    {
      text: "LoremLoremLoremLoremLoremLoremLoremLorem                LoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLorem",
      title: "Multi language",
    },
    {
      text: "LoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem LoremLorem",
      title: "For Personalized use",
    },
    {
      text: "Experience the perfect blend of form and function. Our AI ensures that every design not only looks stunning but also serves its purpose flawlessly.",
      title: "Wide target audience",
    },
    {
      text: "Embrace the elegance of meticulously crafted designs. Our AI polishes every detail to bring a timeless quality to your creative projects.",
      title: "Integrational payment",
    },
  ];

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
            <PartnerSlider />
          </div>
        </section>

        {/* Work Process section */}
        <section className="work-process" id="work-process">
          <div className="container work-process_container">
            <h2 className="work-process_title">
              How it
              <span className="work-process_subtitle"> works?</span>
            </h2>
            <div className="work-process_content" ref={sectionRef}>
              <div className="scroll-line"></div>
              <div
                className="scroll-indicator"
                style={{ transform: `translate(-50%, ${progress * 20}px)` }}
              ></div>
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

        {/* Benefits section */}
        <section className="benefits">
          <div className="container benefits_container">
            <div className="benefits_content">
              <h2 className="section-info_title">
                Benefits form using our{" "}
                <span className="section-info_subtitle"> Kotib AI</span>
              </h2>
              <p className="section-info_text">
                LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
                LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
                LoremLoremLoremLoremLoremLoremLorem
              </p>
            </div>
            <div className="card-wrapper">
              {benefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  text={benefit.text}
                  title={benefit.title}
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Plans section */}
        <section className="plans" id="plans">
          <div className="container">
            <div className="plans_content">
              <h2 className="section-info_title">
                Affordable Plans for
                <span className="section-info_subtitle"> Every Need</span>
              </h2>
              <p className="section-info_text">
                Choose the perfect plan for your design projects, from startups
                to enterprises. Our pricing tiers are designed to offer
                flexibility and value, ensuring you get the most out of our
                AI-powered design assistant.
              </p>
            </div>
            <div className="plans-card-wrapper">
              <PlansCard />
            </div>
          </div>
        </section>

        {/* Customer Stories section */}
        <div className="customer-stories">
          <div className="container">
            <div className="customer-stories_content">
              <h2 className="section-info_title">
                Customer
                <span className="section-info_subtitle"> Success</span> Stories
              </h2>
              <p className="section-info_text">
                LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem
                LoremLoremLoremLoremLoremLoremLoremLoremLorem
              </p>
            </div>
            <CustomerStories />
          </div>
        </div>

        {/* FAQ */}
        <section className="faq" id="feedbacks">
          <div className="container faq_container">
            <div className="faq_content">
              <h2 className="section-info_title">
                Frequently Asked
                <span className="section-info_subtitle"> Questions</span>
              </h2>
              <p className="section-info_text">
                LoremLoremLoremLoremLoremLoremLoremLoremLoremLo
                remLoremLoremLoremLoremLoremLoremLoremLoremLorem
              </p>
            </div>
            <Accordion />
          </div>
        </section>

        {/* Contact section */}
        <section className="contact" id="contact">
          <div className="container contact_container">
            <div className="contact_content">
              <h2 className="section-info_title">
                Let’s get in
                <span className="section-info_subtitle"> touch</span>
              </h2>
              <p className="section-info_text">
                LoremLoremLoremLoremLoremLoremLoremLoremLoremLo
                remLoremLoremLoremLoremLoremLoremLoremLoremLorem
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
