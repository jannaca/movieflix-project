import { expect, test, vi, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonToAddToWatchedList from "./index";

describe("ButtonToAddToWatchedList component", () => {
  test("clicking on button should call OnAddToWatchedList", () => {
    const OnAddToWatchedList = vi.fn();
    render(
      <ButtonToAddToWatchedList OnAddToWatchedList={OnAddToWatchedList} />
    );

    fireEvent.click(screen.getByText("Watched"));
    expect(OnAddToWatchedList).toHaveBeenCalledTimes(1);
  });
});
