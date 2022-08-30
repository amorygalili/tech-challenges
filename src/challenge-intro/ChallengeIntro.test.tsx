import ChallengeIntro from "./ChallengeIntro";
import { render, screen } from "../testUtils";

describe("ChallengeIntro", () => {
  beforeEach(() => {
    render(<ChallengeIntro />);
  });
  it("renders Challenge One Link", () => {
    expect(screen.getByText("Challenge One"));
  });
});
