import React from "react";
import "./homepage.scss";

import HeroSection from "../../components/HeroSection";
import QualitySection from "../../components/QualitySection";
import AboutUsSection from "../../components/AboutUsSection";
import MenuSection from "../../components/MenuSection";
import ReservationSection from "../../components/ReservationSection";
import TeamMemberSection from "../../components/TeamMemberSection";
import TestimonialSection from "../../components/TestimonialSection";
const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <HeroSection />
      <QualitySection />
      <AboutUsSection />
      <MenuSection />
      <ReservationSection />
      <TeamMemberSection />
      <TestimonialSection />
    </div>
  );
};

export default HomePage;
