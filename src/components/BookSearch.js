import { useState } from "react";
import Loader from "./Loader";
import Paginate from "./Paginate";
import BookTable from "./BookTable";

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
    setBookName("");
  };

  const handleSortByName = () => {
    const sortedList = [...bookList].sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
    setBookList(sortedList);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" || e.key === "Space") {
      handleBookSearch();
    }
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
      <h1 id="table-description">Book Search Tool</h1>
      <label htmlFor="book-search" className="font-bold">
        Enter the book name:{" "}
      </label>
      <input
        className="input"
        type="text"
        value={bookName}
        id="book-search"
        onChange={(e) => handleBookNameChange(e)}
        onKeyDown={handleKeyPress}
        placeholder="enter book name"
      />
      <button
        className="btn"
        role="button"
        onClick={handleBookSearch}
        placeholder="search-books"
      >
        Search
      </button>
      <div aria-busy={isLoading} className="loading-status">
        {isLoading && <Loader />}
      </div>
      {pages.length > 0 && (
        <div>
          <button
            className="btn"
            aria-label="Sort books based on book title"
            onClick={handleSortByName}
          >
            Sort By Title
          </button>
          <button
            className="btn"
            onClick={handleSortByYear}
            aria-label="Sort books based on published year"
          >
            Sort By Published Year
          </button>
          <div className="table-style">
            <BookTable pages={pages} />
          </div>
          <Paginate
            books={bookList}
            numberOfPages={numberOfPages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
        </div>
      )}
    </div>
  );
};

export default BookSearch;
