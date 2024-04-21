import MoviesDetails from "./index";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";

const mockMovieDetail = {
  title: "Mock Movie Title",
  poster_path: "/poster.jpg",
  overview: "This is a mock movie overview",
  genres: [
    { id: 1, name: "Action" },
    { id: 2, name: "Adventure" },
  ],
  release_date: "2022-04-15",
  runtime: 120,
};

test("renders movie details correctly", () => {
  render(<MoviesDetails movieDetail={mockMovieDetail} />);
  expect(screen.getByText("Mock Movie Title")).toBeDefined();
  expect(screen.getByAltText("Mock Movie Title")).toBeDefined();
  expect(screen.getByText("This is a mock movie overview")).toBeDefined();
  expect(screen.getByText(/Action/)).toBeDefined();
  expect(screen.getByText(/Adventure/)).toBeDefined();
  expect(screen.getByText("2022-04-15")).toBeDefined();
  expect(screen.getByText("120 min")).toBeDefined();
});
