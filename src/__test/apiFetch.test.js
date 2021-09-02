import { render, screen } from "@testing-library/react";

import { ContactItem } from "../ContactList/ContactItem";

// Test if the get data (bilbo and other names is loaded in the screen)
test("renders learn react link", () => {
  render(<ContactItem />);
  const linkElement = screen.getByText(/Bilbo/);
  expect(linkElement).toBeInTheDocument();
});
