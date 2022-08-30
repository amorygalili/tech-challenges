import { CSSProperties, useState } from "react";
import { getLaunches } from "./getLaunches";
import redX from "./Red-x.png";
import greenCheck from "./check_mark_green.png";
import { Launch } from "./launchInterfaces";
import ChallengeHeader from "../../components/ChallengeHeader";
import ChallengeDescription from "../../components/ChallengeDescription";
import { sputnik } from "./launchData";

const imageStyle: CSSProperties = {
  width: "100px",
  height: "100px",
  margin: "8px",
};

interface LaunchCardProps {
  launch: Launch;
}

const challengeOneDescription = `In this challenge you will create a button which uses the provided getLaunches function to fetch the data and display the Launches in a list. 
Each List Item will contain the name, status name, date launched, rocket configuration name, and the image of the launch.
If the mission is successful a green checkmark image will be rendered. If the mission is a failure, a red x image will be rendered. 
There will be three filtering buttons which filter the list based on status abbreviation - success, failure, all. When filtering buttons are clicked only missions which satisfy the filter will be rendered in the list. 
`;

const LaunchCard: React.FC<LaunchCardProps> = ({ launch }) => {
  return (
    <div
      data-testid={launch.id}
      key={launch.id}
      style={{ display: "flex", alignItems: "center", margin: "8px" }}
    >
      <img
        data-testid={"status-image"}
        style={imageStyle}
        src={greenCheck}
        aria-label="success"
      />
      <img
        data-testid={"status-image"}
        style={imageStyle}
        src={redX}
        aria-label="fail"
      />
      <img src={launch.image} style={imageStyle} />
      <table>
        <thead>
          <tr>
            <th>Status</th>
            <th>Name</th>
            <th>Date Launched</th>
            <th>Rocket</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    </div>
  );
};

interface ChallengeOneProps {}

const ChallengeOne: React.FC<ChallengeOneProps> = () => {
  const [launches, setLaunches] = useState<Launch[]>([sputnik]);

  return (
    <>
      <ChallengeHeader text={"Challenge One"} />
      <ChallengeDescription
        title={"Challenge One Description"}
        description={challengeOneDescription}
      />
      <button onClick={() => {}}>Get Launches</button>
      <button onClick={() => {}}>Show Successful Missions</button>
      <button onClick={() => {}}>Show Failed Missions</button>
      <button onClick={() => {}}>Show All Missions</button>
      <LaunchCard key={launches[0].id} launch={launches[0]} />
    </>
  );
};

export default ChallengeOne;
