import { render } from "@testing-library/react";
import Navbar from "./Navbar";

describe("<Navbar>", () => {
  test("renders in DOM", () => {
    const { getByText } = render(<Navbar />);

    const navbar = getByText("My Workout Tracker");

    expect(navbar).toBeInTheDocument();
  });
});
