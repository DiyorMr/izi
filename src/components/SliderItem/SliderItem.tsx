import React from "react";
import './SliderItem.scss'

interface SliderProps {
  image: string;
  title?: string
}

const SlideItem: React.FC<SliderProps> = ({ image, title }) => {
  return (
    <div className="my_slider_item">
      <img src={image} alt="slide-item" className={title && 'my_slider_item_img'} />
      {title && <p>{title}</p>}
    </div>
  );
};

export default SlideItem;
