import Header from '@/components/Header'
import './Home.scss'
import { BadgeDollarSign, Component, Headset, MessageSquareText, ShieldCheck, Sparkles } from 'lucide-react'
import PartnerSlider from '@/components/PartnerSlider'
import Works from '@/components/Works'
import Benefit from '@/components/Benefit'
import Customers from '@/components/Customers'
import Pricing from '@/components/Pricing'
import Faq from '@/components/Faq'
import Support from '@/components/Support'
import Footer from '@/components/Footer'
import { featuresCardData } from '@/constants'
import FeaturesCard from '@/components/FeaturesCard'
const Home = () => {
    return (
        <>
            <Header />
            {/* Hero section */}
            <section className="hero container" id='hero'>
                <div className="hero_badge">
                    <Sparkles />
                    Smart Financial Assistant
                </div>
                <h1 className="hero_title">
                    Your Personal
                    <br />
                    Finance Expert
                </h1>
                <p className="hero_description">
                    Penny is your friendly AI chatbot, simplifying budgeting, saving,
                    <br />
                    and investing with personalized support.
                </p>
                <div className="hero_buttons">
                    <button className="success">Get Started</button>
                    <button className="secondary">Key Features</button>
                </div>
            </section>
            {/* Slider section */}
            <section className="slider container" id='slider'>
                <div className="slider_info">
                    <h1 className='slider_info_title'>Trusted by Leading Brands</h1>
                    <PartnerSlider />
                </div>
            </section>
            {/* Features section */}
            <section className="features container" id='features'>
                <div className="tag">
                    <Component />
                    KEY FEATURES
                </div>
                <h1>
                    Features That
                    <br />
                    <span>Simplify Finance</span>
                </h1>
                <button className="btn">WHAT OTHERS SAY</button>
                <div className='features_cards'>
                    {
                        featuresCardData?.map((item, index) =>
                            <FeaturesCard key={index} {...item} />
                        )
                    }
                </div>
            </section>
            {/* Works section */}
            <section className="works" id='works'>
                <h2>How it Works?</h2>
                <Works />
            </section>
            {/* Benefit section */}
            <section className="benefits container" id='benefits'>
                <div className="benefits_button">
                    <ShieldCheck />
                    Benefits
                </div>
                <h2 className="benefits_title">Reap the Rewards<br />of Using Penny</h2>
                <Benefit />
            </section>
            {/* Customers section */}
            <section className="customers container" id='customers'>
                <button className="customers_button">
                    <MessageSquareText className='icon' />
                    Testimonials
                </button>
                <h2 className="customers_title">Why Customers<br />Love Penny</h2>
                <Customers />
            </section>
            {/* Pricing section */}
            <section className="pricing container" id='pricing'>
                <button className="pricing_button">
                    <BadgeDollarSign className='icon' />
                    Pricing</button>
                <h2 className="pricing_title">Simple and<br />Affordable Plans</h2>
                <Pricing />
            </section>
            {/* Faq section */}
            <Faq />
            {/* Support section */}
            <section className="support container" id='support'>
                <div className="support_section_tag">
                    <Headset />
                    Support
                </div>
                <h1>Expert Help,<br />
                    Anytime You Need</h1>
                <Support />
            </section>
            {/* Footer section */}

            <Footer />
        </>
    )
}

export default Home
