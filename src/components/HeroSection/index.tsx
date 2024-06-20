import React from "react";
import "./HeroSection.scss";
const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content-container">
        <div className="container">
          <h1>Enjoy Our Delicious Meal</h1>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <button>Book A Table</button>
        </div>
        <div className="hero-img-container">
          <img src="/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
