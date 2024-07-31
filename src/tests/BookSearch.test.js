import { render, screen, fireEvent } from "@testing-library/react";
import BookSearch from "../components/BookSearch";

describe("test Book Search component", () => {
  test("renders label", () => {
    render(<BookSearch />);
    const labelElement = screen.getByText("Enter the book name:");
    expect(labelElement).toBeInTheDocument();
  });

  test("renders search button", () => {
    render(<BookSearch />);
    const buttonElement = screen.getByPlaceholderText("search-books");
    expect(buttonElement).toBeInTheDocument();
  });

  test("search books", async () => {
    render(<BookSearch />);
    const inputElement = screen.getByPlaceholderText("enter book name");
    fireEvent.change(inputElement, { target: { value: "Harry Potter" } });
    const buttonElement = screen.getByText("Search");
    fireEvent.click(buttonElement);

    const bookTitle = await screen.findByText("Loading results....");
    expect(bookTitle).toBeInTheDocument();
  });
});
