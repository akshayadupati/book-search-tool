const BookTable = ({ pages }) => {
  return (
    <table aria-labelledby="table-description" className="book-table">
      <thead class="table-head">
        <tr class="table-heading-row">
          {/* Used for column headers. Helps identify which column the header cell associated to. */}
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Published Year</th>
          <th scope="col">Cover ID</th>
        </tr>
      </thead>
      <tbody>
        {pages.map((eachBook) => (
          <tr
            key={`${eachBook._version_}-${eachBook.title}`}
            data-testid="book"
          >
            {console.log(eachBook)}
            <td>{eachBook.title}</td>
            <td>{eachBook.author_name && eachBook.author_name.join(",")}</td>
            <td>{eachBook.first_publish_year}</td>
            <td>
              {eachBook.cover_edition_key ? eachBook.cover_edition_key : "NA"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookTable;
