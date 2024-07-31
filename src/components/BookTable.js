const BookTable = ({ pages }) => {
  return (
    <table aria-labelledby="table-description" className="book-table">
      <thead className="table-head">
        <tr className="table-heading-row">
          {/* Used for column headers. Helps identify which column the header cell associated to. */}
          <th scope="col">Cover ID</th>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Published Year</th>
        </tr>
      </thead>
      <tbody>
        {pages.map((eachBook) => (
          <tr
            key={`${eachBook._version_}-${eachBook.title}`}
            data-testid="book"
          >
            <td>
              <img
                className="cover-image"
                src={
                  eachBook.oclc && eachBook.oclc.length > 0
                    ? `https://covers.openlibrary.org/b/oclc/${eachBook.oclc[0]}-M.jpg`
                    : eachBook.isbn && eachBook.isbn.length > 0
                    ? `https://covers.openlibrary.org/b/isbn/${eachBook.isbn[0]}-M.jpg`
                    : eachBook.lccn && eachBook.lccn.length > 0
                    ? `https://covers.openlibrary.org/b/lccn/${eachBook.lccn[0]}-M.jpg`
                    : null
                }
              />
            </td>
            <td>{eachBook.title}</td>
            <td>{eachBook.author_name && eachBook.author_name.join(",")}</td>
            <td>{eachBook.first_publish_year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
