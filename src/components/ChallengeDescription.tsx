import React from "react";
import { Text } from "@blueprintjs/core";

interface ChallengeDescriptionProps {
  description: string;
  title?: string;
}

const ChallengeDescription: React.FC<ChallengeDescriptionProps> = ({
  description,
  title,
}) => {
  return (
    <>
      <Text style={{ margin: "12px" }} title={title}>
        {description}
        <div>Good Luck!</div>
      </Text>
    </>
  );
};

export default ChallengeDescription;
