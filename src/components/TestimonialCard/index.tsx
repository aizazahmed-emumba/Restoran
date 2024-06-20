import React from "react";
import "./TestimonialCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
const TestimonialCard: React.FC = () => {
  return (
    <div className="testimonial-card">
      <div className="icon">
        <FontAwesomeIcon icon={faQuoteLeft} size="3x" />
      </div>
      <p>
        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet
        amet eirmod eos labore diam
      </p>
      <div className="client-details">
        <div className="avatar">
          <img src="../../../public/testimonial-4.png" alt="client" />
        </div>
        <div className="client-content">
          <h1>Client Name</h1>
          <p>Profession</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
