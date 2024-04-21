import { expect, test, vi, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonToAddToWatchList from "./index";

describe("ButtonToAddToWatchList component", () => {
  test("clicking on button should call OnAddToWatchList", () => {
    const OnAddToWatchList = vi.fn();
    render(<ButtonToAddToWatchList OnAddToWatchList={OnAddToWatchList} />);

    fireEvent.click(screen.getByTestId("button-watchList"));
    expect(OnAddToWatchList).toHaveBeenCalledTimes(1);
  });
});
