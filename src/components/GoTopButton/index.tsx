import React, { useEffect } from "react";
import "./GoTopButton.scss";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GoTopTopButton: React.FC = () => {
  const [showGoTop, setShowGoTop] = React.useState("goTopHidden");

  useEffect(() => {
    const handleVisibleButton = () => {
      const position = window.scrollY;
      if (position > 100) {
        setShowGoTop("goTopVisible");
      } else {
        setShowGoTop("goTopHidden");
      }
    };
    window.addEventListener("scroll", handleVisibleButton);
    return () => {
      window.removeEventListener("scroll", handleVisibleButton);
    };
  }, []);

  const refScrolUp = React.useRef<HTMLDivElement>(null);

  const handleScrollUp = () => {
    refScrolUp.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={refScrolUp}></div>
      <div className={showGoTop} onClick={handleScrollUp}>
        <button className="goTop">
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      </div>
    </>
  );
};

export default GoTopTopButton;
