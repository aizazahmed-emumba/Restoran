import React from "react";
import "./QualitySection.scss";
import Card from "../Card";

const QualitySection: React.FC = () => {
  return (
    <section className="quality-section">
      <div className="card-container">
        <Card
          title="Master Chefs"
          icon="avatar"
          description="Diam elitr kasd sed at elitr
sed ipsum justo dolor sed
clita amet diam"
        />
        <Card
          title="Quality Food"
          icon="fork"
          description="Diam elitr kasd sed at elitr
sed ipsum justo dolor sed
clita amet diam"
        />
        <Card
          title="Online Order"
          icon="cart"
          description="Diam elitr kasd sed at elitr
sed ipsum justo dolor sed
clita amet diam"
        />
        <Card
          title="24/7 Service"
          icon="headphone"
          description="Diam elitr kasd sed at elitr
sed ipsum justo dolor sed
clita amet diam"
        />
      </div>
    </section>
  );
};

export default QualitySection;
