import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

describe("Challenge Landing Page", () => {
  beforeEach(async () => {
    render(<App />);
  });
  it("Renders the intro component", async () => {
    await waitFor(() =>
      expect(
        screen.getByText(
          "Here are a few fun challenges to test your frontend web development skills"
        )
      ).toBeInTheDocument()
    );
  });
});
