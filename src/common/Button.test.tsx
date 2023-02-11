import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

const testClickHandler = jest.fn();

describe("<Button>", () => {
  test("renders in the DOM", () => {
    const { getByRole } = render(
      <Button
        type="button"
        text="Test button"
        size="small"
        onClickHandler={testClickHandler}
        theme="primary"
      />
    );

    const button = getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Test button");
    expect(button).toHaveAttribute("type", "button");
  });

  test("triggers click handler when clicked", async () => {
    const user = userEvent.setup();

    const { getByRole } = render(
      <Button
        type="button"
        text="Test button"
        size="small"
        onClickHandler={testClickHandler}
        theme="primary"
      />
    );

    const button = getByRole("button");

    await user.click(button);
    await user.click(button);

    expect(testClickHandler).toBeCalledTimes(2);
  });
});
