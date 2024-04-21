import { expect, test, vi, describe } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import ButtonAddToFavorites from "./index";

describe("ButtonAddToFavorites component", () => {
  test("clicking on button should call OnAddToFavorite", () => {
    const OnAddToFavorite = vi.fn();
    render(
      <ButtonAddToFavorites OnAddToFavorite={OnAddToFavorite} />
    );

    fireEvent.click(screen.getByText("Watched"));
    expect(OnAddToFavorite).toHaveBeenCalledTimes(1);
  });
});
