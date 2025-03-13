import React from "react";

interface SliderProps {
  image: string;
}

const SlideItem: React.FC<SliderProps> = ({ image }) => {
  return (
    <div>
      <img src={image} alt="slide-item" />
    </div>
  );
};

export default SlideItem;
