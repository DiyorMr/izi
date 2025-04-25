import { BadgeDollarSign } from "lucide-react"
import "./Pricing.scss"
import { infoBasic, infoData, infoPremium } from "./data";


const plans = [
    {
        title: 'Basic',
        price: 'CUSTOM',
        features: [
            'Access to Budgeting Tools',
            'Basic Budgeting and Expense Tracking',
            'Access to Educational Resources',
            'Real-time Chat Support'
        ],
        highlight: false,
    },
    {
        title: 'Basic',
        price: 'FREE',
        features: [
            'Access to Budgeting Tools',
            'Basic Budgeting and Expense Tracking',
            'Access to Educational Resources',
            'Real-time Chat Support'
        ],
        highlight: false,
    },
    {
        title: 'Premium',
        price: '$12',
        period: '/month',
        features: [
            'All Basic Plan Features',
            'Personalized Financial Advice',
            'Advanced Investment Tracking',
            'Custom Savings Goals with Tracker',
            'Priority Chat Support'
        ],
        highlight: true,
    },
    {
        title: 'Basic',
        price: '$29',
        period: '/month',
        features: [
            'Access to Budgeting Tools',
            'Basic Budgeting and Expense Tracking',
            'Access to Educational Resources',
            'Real-time Chat Support',
            'Access to Educational Resources',
            'Real-time Chat Support'
        ],
        highlight: false,
    }
];


const Pricing = () => {
    return (
        <div className="container">
            <div className="pricing_section">
                <button className="pricing_button">
                    <BadgeDollarSign className='icon' />
                    Pricing</button>
                <h2 className="pricing_title">Simple and<br />Affordable Plans</h2>
            </div>
            <div className="pricing">
                {plans.map((plan, index) => (
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
        </div>
    )
}

export default Pricing
