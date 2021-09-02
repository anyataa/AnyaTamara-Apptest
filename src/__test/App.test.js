import { render, screen } from "@testing-library/react";

import { TopHome } from "../HomePage/Top";

test("renders learn react link", () => {
  render(<TopHome />);
  const linkElement = screen.getByText(/Chat/i);
  expect(linkElement).toBeInTheDocument();
});
