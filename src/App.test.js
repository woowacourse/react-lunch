import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom/extend-expect";

test("renders learn react link", async () => {
  render(<App />);
  const linkElement = screen.getByText("닫기");
  expect(linkElement).toBeInTheDocument();
});
