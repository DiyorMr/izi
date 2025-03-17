import { useState } from "react";

import "./PlansCard.scss";
import Button from "../Button";

const PlansCard = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const pricingPlans = [
    {
      id: 1,
      type: "standart",
      price: "36 000 so’m",
      time: "1 soat vaqt",
      buttonText: "sotib olish",
    },
    {
      id: 2,
      type: "standart",
      price: "100 000 so’m",
      time: "3 soat vaqt",
      buttonText: "sotib olish",
    },
    {
      id: 3,
      type: "standart",
      price: "200 000 so’m",
      time: "7 soat vaqt",
      buttonText: "sotib olish",
    },
    {
      id: 4,
      title: "Katta chegirma",
      type: "discount",
      price: "500 000 so’m",
      time: "17 soat vaqt",
      buttonText: "sotib olish",
    },
    {
      id: 5,
      title: "Bizneslar uchun",
      type: "business",
      info: "Chegirmali narx uchun biz bilan bog’laning",
      buttonText: "Bog'lanish",
    },
  ];

  return (
    <div className="pricing-container">
      {pricingPlans.map((plan) => (
        <div
          className={`pricing-card ${plan.id === activeIndex ? "active" : ""} ${
            plan?.type
          }`}
          key={plan.id}
          onClick={() => setActiveIndex(plan.id)}
        >
          <div className="pricing-card_content">
            {plan?.title && (
              <div className="card-header">
                <h3 className="price">{plan?.title}</h3>
              </div>
            )}

            <ul className="features_list">
              {plan?.type !== "contact" && plan?.price && (
                <li className="features_item" key={plan.id}>
                  <h3 className="features_text">{plan.price}</h3>
                </li>
              )}
              {plan?.type !== "contact" && plan?.time && (
                <li className="features_item" key={plan.id}>
                  <h3 className="features_text">{plan.time}</h3>
                </li>
              )}
              {plan?.type == "business" && (
                <li className="features_item" key={plan.id}>
                  <p className="features_info">{plan.info}</p>
                </li>
              )}
            </ul>
          </div>
          <Button
            className="card-btn "
            path="#contact"
            text={plan.buttonText}
          />
        </div>
      ))}
    </div>
  );
};

export default PlansCard;
