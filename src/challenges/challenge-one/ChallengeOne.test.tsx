import { act, render, screen, waitFor, within } from "../../testUtils";
import userEvent from "@testing-library/user-event";
import ChallengeOne from "./ChallengeOne";
import * as getLaunches from "./getLaunches";
import { discoverer, sputnik, sputnikFail } from "./launchData";

describe("Challenge One", () => {
  beforeEach(() => {
    render(<ChallengeOne />);
  });

  it("should render the Challenge Header ", () => {
    expect(screen.getByText("Challenge One"));
    expect(screen.getByRole("link", { name: "Back to Intro" }));
  });

  it("renders the problem description", () => {
    expect(screen.getByText("Good Luck!"));
  });

  it("fetches all of the launches and displays them when the getLaunches button is clicked", async () => {
    const getLaunchesSpy = jest
      .spyOn(getLaunches, "getLaunches")
      .mockResolvedValue([sputnik, discoverer, sputnikFail]);

    await act(async () => {
      userEvent.click(screen.getByRole("button", { name: "Get Launches" }));
    });

    expect(getLaunchesSpy).toHaveBeenCalledTimes(1);
    expect(screen.getByText("Sputnik 8K74PS | Sputnik 1")).toBeInTheDocument();
    expect(screen.getByText("Thor Agena A | Discoverer 7")).toBeInTheDocument();
    expect(screen.getByText("Sputnik 8A91 | D-1 1")).toBeInTheDocument();
  });

  it("shows only failed missions when the failed mission button is clicked", async () => {
    await act(async () => {
      userEvent.click(screen.getByRole("button", { name: "Get Launches" }));
    });

    userEvent.click(
      screen.getByRole("button", { name: "Show Failed Missions" })
    );

    expect(screen.getByText("Sputnik 8A91 | D-1 1")).toBeInTheDocument();
    expect(
      screen.queryByText("Sputnik 8K74PS | Sputnik 1")
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText("Thor Agena A | Discoverer 7")
    ).not.toBeInTheDocument();
  });

  it("shows only successful missions when the successful mission button is clicked", async () => {
    await act(async () => {
      userEvent.click(screen.getByRole("button", { name: "Get Launches" }));
    });

    userEvent.click(
      screen.getByRole("button", { name: "Show Successful Missions" })
    );

    expect(screen.queryByText("Sputnik 8A91 | D-1 1")).not.toBeInTheDocument();
    expect(
      screen.queryByText("Sputnik 8K74PS | Sputnik 1")
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Thor Agena A | Discoverer 7")
    ).toBeInTheDocument();
  });

  it("shows all missions when the show all missions button is clicked", async () => {
    await act(async () => {
      userEvent.click(screen.getByRole("button", { name: "Get Launches" }));
    });

    userEvent.click(
      screen.getByRole("button", { name: "Show Failed Missions" })
    );

    expect(
      screen.queryByText("Sputnik 8K74PS | Sputnik 1")
    ).not.toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: "Show All Missions" }));

    expect(
      screen.queryByText("Sputnik 8K74PS | Sputnik 1")
    ).toBeInTheDocument();
  });

  it("renders a redx image if not successful", async () => {
    await act(async () => {
      userEvent.click(screen.getByRole("button", { name: "Get Launches" }));
    });

    userEvent.click(
      screen.getByRole("button", { name: "Show Failed Missions" })
    );
    within(screen.getByTestId(sputnikFail.id)).getByRole("img", {
      name: "fail",
    });
    expect(screen.getAllByTestId("status-image").length).toBe(1);
  });

  it("renders a green check images if successful", async () => {
    await act(async () => {
      userEvent.click(screen.getByRole("button", { name: "Get Launches" }));
    });

    userEvent.click(
      screen.getByRole("button", { name: "Show Successful Missions" })
    );
    within(screen.getByTestId(sputnik.id)).getByRole("img", {
      name: "success",
    });

    expect(screen.getAllByTestId("status-image").length).toBe(2);
  });
});
