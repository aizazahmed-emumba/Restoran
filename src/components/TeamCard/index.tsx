import React from "react";
import "./TeamCard.scss";

interface TeamCardProps {
  img: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ img }) => {
  return (
    <div className="team-card">
      <img src={img} alt="team-member" />
      <h3>John Doe</h3>
      <p>Master Chef</p>
      <div className="social-icons">
        <div>
          <img src="/facebook.png" alt="facebook" />
        </div>
        <div>
          <img src="/twitter.png" alt="twitter" />
        </div>
        <div>
          <img src="/insta.png" alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
