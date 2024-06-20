import React from "react";
import "./Cards.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faHeadset,
  faUserTie,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  title: string;
  description: string;
  icon: "avatar" | "fork" | "cart" | "headphone";
}

const index: React.FC<CardProps> = ({ description, icon, title }) => {
  return (
    <div className="card">
      <div className="card-content">
        <div className="icon">
          {icon === "avatar" && <FontAwesomeIcon icon={faUserTie} size="3x" />}
          {icon === "fork" && <FontAwesomeIcon icon={faUtensils} size="3x" />}
          {icon === "cart" && <FontAwesomeIcon icon={faCartPlus} size="3x" />}
          {icon === "headphone" && (
            <FontAwesomeIcon icon={faHeadset} size="3x" />
          )}
        </div>
        <div className="card-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default index;
