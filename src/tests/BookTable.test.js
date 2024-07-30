import { render, screen } from "@testing-library/react";
import MockResList from "./mockData.json"
import { act } from "react";
import BookTable from "../components/BookTable";
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MockResList);
    },
  });
});
describe("test BookTable Component", () => {
  it("api fetches all the data", async () => {
    await act(async () => render(<BookTable pages={MockResList.docs} />));
    const totalBooks = screen.getAllByTestId("book");
    expect(totalBooks.length).toBe(100);
  });
});
