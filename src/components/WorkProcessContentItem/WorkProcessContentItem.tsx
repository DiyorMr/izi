import React from "react";

import "./WorkProcessContentItem.scss";
import Button from "../Button";

interface WorkProcessContentItemProps {
  title: string;
  text: string;
  path: string;
  buttonText: string;
  img: string;
}

const WorkProcessContentItem: React.FC<WorkProcessContentItemProps> = ({
  title,
  text,
  path,
  buttonText,
  img,
}) => {
  return (
    <div className="work-process_content-item">
      <div className="item-content">
        <h3 className="item-content_tile">{title}</h3>
        <p className="item-content_text">{text}</p>
        <Button path={path} text={buttonText} />
      </div>
      <div className="item-img">
        <img src={img} alt={title} />
      </div>
    </div>
  );
};

export default WorkProcessContentItem;
