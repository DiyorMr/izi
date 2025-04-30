import React from "react";
import './LeaderItem.scss'
interface SliderProps {
  image: string;
  title: string;
}

const LeaderItem: React.FC<SliderProps> = ({ image, title }) => {
  return (
    <div className="slide-item">
      <img src={image} alt={title} />
      <p className="slide-title">{title}</p>
    </div>
  );
};

export default LeaderItem;