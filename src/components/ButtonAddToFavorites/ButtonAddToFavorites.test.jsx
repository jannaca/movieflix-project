import { expect, test, vi, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonAddToFavorites from "./index";

describe("ButtonAddToFavorites component", () => {
  test("clicking on button should call OnAddToFavorite", () => {
    const OnAddToFavorites = vi.fn();
    render(<ButtonAddToFavorites OnAddToFavorites={OnAddToFavorites} />);

    fireEvent.click(screen.getByTestId("button-favorites"));
    expect(OnAddToFavorites).toHaveBeenCalledTimes(1);
  });
});
