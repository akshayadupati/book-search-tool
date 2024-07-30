import React from "react";

const Paginate = ({ books, numberOfPages, setCurrentPage, currentPage }) => {
  const numberOfButtons = Math.ceil(books.length / numberOfPages);
  let buttonList = [];
  for (let i = 1; i <= numberOfButtons; i++) {
    buttonList.push(i);
  }

  return (
    <nav
      role="navigation"
      aria-label="Pagination controls"
      className="pagination-container"
    >
      <ul role="list" className="pagination-list">
        {buttonList.map((btn, index) => (
          <li key={index}>
            <button
              type="button"
              className={`pagination-btn ${
                currentPage === btn ? "active" : ""
              }`}
              onClick={() => setCurrentPage(btn)}
              aria-label={`Go to page ${btn}`}
              aria-current={currentPage === btn ? "page" : undefined}
            >
              {btn}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginate;
