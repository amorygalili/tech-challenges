import { Link } from "react-router-dom";

interface Props {}

const ChallengeIntro = (_props: Props) => {
  return (
    <>
      <h1>Mini Technical Challenges</h1>
      <div>
        Here are a few fun challenges to test your frontend web development
        skills
      </div>
      <div>
        Each challenge has a problem description and a test suite that will pass
        once the challenge has been completed.
      </div>
      <div>Good Luck!</div>
      <Link to="/1">Challenge One</Link>
    </>
  );
};

export default ChallengeIntro;
