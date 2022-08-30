import { Icon } from "@blueprintjs/core";
import React from "react";
import { Link } from "react-router-dom";

interface ChallengeHeaderProps {
  text: string;
}

const ChallengeHeader: React.FC<ChallengeHeaderProps> = ({ text }) => {
  return (
    <>
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <Icon icon="caret-left" size={20} />
        <h3>Back to Intro</h3>
      </Link>
      <h1>{text}</h1>
    </>
  );
};

export default ChallengeHeader;
