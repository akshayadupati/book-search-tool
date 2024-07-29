const Paginate = ({ books, numberOfPages, setCurrentPage }) => {
  const numberOfButtons = books.length / numberOfPages;
  let buttonList = [];
  for (let i = 1; i <= numberOfButtons; i++) {
    buttonList.push(i);
  }
  return (
    <div className="pagination-container">
      {buttonList.map((btn, index) => (
        <p className="pagination-btn" onClick={() => setCurrentPage(index + 1)}>
          {btn}
        </p>
      ))}
    </div>
  );
};

export default Paginate;
