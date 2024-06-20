import React from "react";
import "./TeamMemberSection.scss";
import HorizontalDivider from "../HorizontalDivider";
import TeamCard from "../TeamCard";

const TeamMemberSection: React.FC = () => {
  return (
    <section className="team-section">
      <h2>
        <HorizontalDivider />
        Team Members
        <HorizontalDivider />
      </h2>
      <h1>Our Master Chefs</h1>
      <div className="team-section-card-container">
        <TeamCard img="/team-1.png" />
        <TeamCard img="/team-2.jpg" />
        <TeamCard img="/team-3.png" />
        <TeamCard img="/team-4.png" />
      </div>
    </section>
  );
};

export default TeamMemberSection;
