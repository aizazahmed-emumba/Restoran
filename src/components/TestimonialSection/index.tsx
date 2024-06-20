import React from "react";
import "./TestimonialSection.scss";
import HorizontalDivider from "../HorizontalDivider";
import TestimonialCard from "../TestimonialCard";

const TestimonialSection: React.FC = () => {
  return (
    <section className="testimonial-section">
      <h2>
        <HorizontalDivider /> Testimonial <HorizontalDivider />
      </h2>
      <h1>Our Clients Say!!!</h1>
      <div className="testimonial-card-container">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};

export default TestimonialSection;
