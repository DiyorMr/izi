import React from "react";

import "./Benefitcard.scss";

interface BenefitCardProps {
  text: string;
  title: string;
  className?: string;
  onClick: () => void;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  text,
  title,
  className,
  onClick,
}) => {
  return (
    <div className={`benefit-card ${className || ""}`} onClick={onClick}>
      <div className="benefit-card_content">
        <p className="benefit-card_text">{text}</p>
        <div className="benefit-card_vector">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="currentColor"
          >
            <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
          </svg>
        </div>
      </div>
      <h4 className="benefit-card_title">{title}</h4>
    </div>
  );
};

export default BenefitCard;
