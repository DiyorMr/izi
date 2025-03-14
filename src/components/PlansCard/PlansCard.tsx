import React from "react";

import "./PlansCard.scss";
import Button from "../Button";

const PlansCard = () => {
  const pricingPlans = [
    {
      id: 1,
      type: "FREE",
      price: "$0/m",
      limit: "Free forever",
      features: [
        "Basic AI-generations",
        "Access to customization tools",
        "Standard templates library",
        "5 projects per month",
      ],
    },
    {
      id: 2,
      type: "BASIC",
      price: "$14.99/m",
      limit: "Billed Monthly",
      features: [
        "Advanced AI-generations",
        "Full access to customization tools",
        "Premium templates library",
        "Unlimited projects",
        "Real-time collaboration",
        "Priority email support",
      ],
    },
    {
      id: 3,
      type: "PRO",
      price: "$29.99/m",
      limit: "Billed Monthly",
      features: [
        "All features included in Pro Plan",
        "Dedicated account manager",
        "Custom AI solutions and designs",
        "Onboarding and training sessions",
        "24/7 priority support",
        "Advanced analytics and reporting",
        "Secure cloud storage",
      ],
    },
  ];

  return (
    <div className="pricing-container">
      {pricingPlans.map((plan) => (
        <div className="pricing-card" key={plan.id}>
          <div className="pricing-card_content">
            <div className="card-header">
              <div className="subtitle">{plan.type}</div>
              <h2 className="price">{plan.price}</h2>
              <p className="description">{plan.limit}</p>
            </div>
            <ul className="features_list">
              {plan.features.map((feature) => (
                <li className="features_item" key={feature}>
                  <img src="/price-icon.svg" alt="feature" />
                  <p className="features_text">{feature}</p>
                </li>
              ))}
            </ul>
          </div>
          <Button className="card-btn active" path="#" text="Remix Template" />
        </div>
      ))}
    </div>
  );
};

export default PlansCard;
