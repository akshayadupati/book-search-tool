import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import Paginate from "./Paginate";

const BookSearch = () => {
  const [bookName, setBookName] = useState("");
  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const numberOfPages = 10;
  const lastIndex = currentPage * numberOfPages;
  const startIndex = lastIndex - 10;
  const pages = bookList.slice(startIndex, lastIndex + 1);
  const handleBookNameChange = (e) => {
    setBookName(e.target.value);
  };

  const handleBookSearch = async () => {
    setIsLoading(true);
    const result = await fetch(
      "https://openlibrary.org/search.json?q=" + bookName
    );
    const data = await result.json();
    setBookList(data.docs);
    setIsLoading(false);
  };

  const handleSortByName = () => {
    const sortedList = [...bookList].sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    setBookList(sortedList);
  };

  const handleSortByYear = () => {
    const sortedList = [...bookList].sort((a, b) => {
      if (a.first_publish_year < b.first_publish_year) return -1;
      if (a.first_publish_year > b.first_publish_year) return 1;
      return 0;
    });
    setBookList(sortedList);
  };

  return (
    <div>
      <label className="font-bold">Enter the book name: </label>
      <input
        className="input"
        type="text"
        value={bookName}
        onChange={(e) => handleBookNameChange(e)}
      />
      <button className="btn" onClick={handleBookSearch}>
        Search
      </button>
      {isLoading && <Shimmer />}
      {pages.length > 0 && (
        <div>
          <button className="btn" onClick={handleSortByName}>
            Sort By Title
          </button>
          <button className="btn" onClick={handleSortByYear}>
            Sort By Published Year
          </button>
          <table className="book-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Published Year</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((eachBook) => (
                <tr key={eachBook.cover_edition_key}>
                  <td>{eachBook.title}</td>
                  <td>
                    {eachBook.author_name && eachBook.author_name.join(",")}
                  </td>
                  <td>{eachBook.first_publish_year}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Paginate
            books={bookList}
            numberOfPages={numberOfPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      )}
    </div>
  );
};

export default BookSearch;
