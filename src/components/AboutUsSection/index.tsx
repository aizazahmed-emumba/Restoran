import React from "react";
import HorizontalDivider from "../HorizontalDivider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import "./AboutUsSection.scss";

const AboutUsSection: React.FC = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-content">
        <div className="images-container">
          <div className="img-1">
            <img src="/about-1.png" alt="about1" />
          </div>
          <div className="img-2">
            <img src="/about-2.png" alt="about2" />
          </div>
          <div className="img-3">
            <img src="/about-3.png" alt="about3" />
          </div>
          <div className="img-4">
            <img src="/about-4.png" alt="about4" />
          </div>
        </div>
        <div className="detail-container">
          <h3 className="heading">
            About us <HorizontalDivider />
          </h3>
          <div className="title">
            <h1>
              Welcome to{" "}
              <span>
                <FontAwesomeIcon icon={faUtensils} />{" "}
              </span>
              Restoran
            </h1>
          </div>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam ametdiam et eos erat ipsum et lorem et sit, sed stet lorem sit.
          </p>
          <p>
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>

          <div className="achivement-container">
            <div className="achivement">
              <div className="number">
                <h1>13</h1>
              </div>
              <p>
                Years of <br /> <span>EXPERIENCE</span>
              </p>
            </div>
            <div className="achivement">
              <div className="number">
                <h1>50</h1>
              </div>
              <p>
                Popular <br /> <span>MASTER CHEFS</span>
              </p>
            </div>
          </div>
          <button>Read More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
