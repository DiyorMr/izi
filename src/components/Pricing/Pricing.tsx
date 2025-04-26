import "./Pricing.scss"
import { infoBasic, infoData, infoPremium, plansData } from "@/constants";
const Pricing = () => {
    return (
        <>
            <div className="pricings">
                {plansData.map((plan, index) => (
                    <div className={`card ${plan.highlight ? 'highlight' : ''}`} key={index}>
                        <div className="card__title">{plan.title}</div>
                        <div className="card__price">
                            {plan.price} {plan.period && <span className="card__period">{plan.period}</span>}
                        </div>
                        <p className="card__desc">Ideal for individuals looking to manage their finances</p>
                        <ul className="card__features">
                            {plan.features.map((item, i) => (
                                <li key={i}><span>✔</span> {item}</li>
                            ))}
                        </ul>
                        <button className="card__button">GET STARTED</button>
                    </div>
                ))}
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
                    <button className="pricing_info_basic_btn">Get Started</button>
                    {
                        infoBasic.map((item, index) =>
                            <div className="pricing_info_plans_text" key={index}>
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
                    <button className="pricing_info_premium_btn">Get Started</button>
                    {
                        infoPremium.map((item, index) =>
                            <div className="pricing_info_plans_text" key={index}>
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

    )
}

export default Pricing
