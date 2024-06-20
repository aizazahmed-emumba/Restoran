import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger, faUtensils } from "@fortawesome/free-solid-svg-icons";
import HorizontalDivider from "../../components/HorizontalDivider";
import Cup from "../../components/Cup";
import "./MenuSection.scss";
import MenuItem from "../MenuItem";

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<
    "breakfast" | "lunch" | "dinner"
  >("breakfast");

  const handleCategoryChange = (category: "breakfast" | "lunch" | "dinner") => {
    setActiveCategory(category);
  };

  return (
    <section id="menu" className="menu-section">
      <h1 className="heading">
        {" "}
        <HorizontalDivider />
        Food Menu <HorizontalDivider />
      </h1>
      <h2>Most Popular Items</h2>
      <div className="category-contianer">
        <div
          onClick={() => handleCategoryChange("breakfast")}
          className={`category  ${activeCategory === "breakfast" && "active"} `}
        >
          <div className="icon ">
            <Cup />
          </div>
          <div className="text">
            <h3>Popular</h3>
            <h2>Breakfast</h2>
          </div>
        </div>
        <div
          onClick={() => handleCategoryChange("lunch")}
          className={`category  ${activeCategory === "lunch" && "active"} `}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faBurger} />
          </div>
          <div className="text">
            <h3>Special</h3>
            <h2>Lunch</h2>
          </div>
        </div>
        <div
          onClick={() => handleCategoryChange("dinner")}
          className={`${activeCategory === "dinner" && "active"} category`}
        >
          <div className="icon">
            <FontAwesomeIcon icon={faUtensils} />{" "}
          </div>
          <div className="text">
            <h3>Lovely</h3>
            <h2>Dinner</h2>
          </div>
        </div>
      </div>
      <div className="menu-table">
        {activeCategory === "breakfast" && (
          <>
            <MenuItem
              name="Chicken BreakFast"
              price={115}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-1.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={200}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-2.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={150}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-3.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={300}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-4.jpg.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={175}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-5.jpg.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={165}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-6.jpg.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={115}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-7.jpg.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={600}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-8.jpg.png"
            />
          </>
        )}

        {activeCategory === "lunch" && (
          <>
            <MenuItem
              name="Chicken Lunch"
              price={115}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-1.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={150}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-3.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={200}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-2.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={300}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-4.jpg.png"
            />

            <MenuItem
              name="Chicken Burger"
              price={165}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-6.jpg.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={115}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-7.jpg.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={175}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-5.jpg.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={600}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-8.jpg.png"
            />
          </>
        )}

        {activeCategory === "dinner" && (
          <>
            <MenuItem
              name="Chicken Dinner"
              price={115}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-1.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={175}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-5.jpg.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={200}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-2.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={150}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-3.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={300}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-4.jpg.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={115}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-7.jpg.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={600}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-8.jpg.png"
            />
            <MenuItem
              name="Chicken Burger"
              price={165}
              description="Ipsum ipsum clita erat amet dolor justo diam"
              image="/menu-6.jpg.png"
            />
          </>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
