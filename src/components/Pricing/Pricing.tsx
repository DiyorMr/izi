import React, { useState } from "react";
import "./Pricing.scss";
import { infoBasic, infoData, infoPremium, plansData } from "@/constants";

const
    Pricing: React.FC = () => {
        const [activeIndex, setActiveIndex] = useState<number | null>(2);

        const handleCardClick = (index: number) => {
            setActiveIndex(index);
            console.log(`Plan selected: ${plansData[index].title}`);
        };

        return (
            <>
                <div className="pricings">
                    <div className="pricing">
                        {plansData.map((plan, index) => (
                            <div
                                key={index}
                                className={`card ${activeIndex === index ? "active" : ""}`}
                                onClick={() => handleCardClick(index)}
                            >
                                <div>
                                    <div className="card__title">{plan.title}</div>
                                    <div className="card__price">
                                        {plan.price}
                                        {plan.period && <span className="card__period">{plan.period}</span>}
                                    </div>
                                    <p className="card__desc">
                                        Ideal for individuals looking to manage their finances
                                    </p>
                                    <ul className="card__features">
                                        {plan.features.map((item: string, i: number) => (
                                            <li key={i}>
                                                <img src="./images/activeicon.svg" alt="image" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <a className="card__button">
                                    GET STARTED
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="pricing_info">
                    <div className="pricing_info_plans">
                        <h2 className="pricing_info_plans_title">Explore Our Plans and
                            Find the Right Fit for You
                        </h2>
                        {
                            infoData.map((item, index) =>
                                <div className="pricing_info_plans_text" key={index}>
                                    <p>{item.name}</p>
                                </div>
                            )
                        }
                    </div>

                    <div className="pricing_info_basic">
                        <h2 className="pricing_info_basic_title">Basic</h2>
                        <a href="#" className="pricing_info_basic_btn">Get Started</a>

                        {
                            infoBasic.map((item, index) =>
                                <div className="pricing_info_basic_text" key={index}>
                                    {item?.name ?
                                        <p>{item.name}</p>
                                        :
                                        <img className="icon" src={item?.img} alt="icon" />
                                    }
                                </div>
                            )
                        }
                    </div>
                    <div className="pricing_info_premium">
                        <h2 className="pricing_info_premium_title">Premium</h2>
                        <a href="#" className="pricing_info_premium_btn">Get Started</a>

                        {
                            infoPremium.map((item, index) =>
                                <div className="pricing_info_premium_text" key={index}>
                                    {item?.name ?
                                        <p>{item.name}</p>
                                        :
                                        <img className="icon" src={item?.img} alt="icon" />
                                    }
                                </div>
                            )
                        }
                    </div>
                </div>
            </>
        );
    };

export default Pricing;

