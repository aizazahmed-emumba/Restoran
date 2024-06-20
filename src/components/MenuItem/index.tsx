import React from "react";
import "./MenuItem.scss";

interface MenuItemProps {
  name: string;
  price: number;
  description: string;
  image: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  description,
  image,
  name,
  price,
}) => {
  return (
    <div className="menu-item">
      <div className="menu-item-img">
        <img src={image} alt="food" />
      </div>
      <div className="menu-item-content">
        <div className="menu-item-title">
          <h2>{name}</h2>
          <h2 className="price">${price}</h2>
        </div>
        <div className="menu-item-description">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
