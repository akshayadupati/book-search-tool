const BookTable = ({ pages }) => {
  return (
    <table aria-labelledby="table-description" className="book-table">
      <thead class="table-head">
        <tr class="table-heading-row">
          {/* Used for column headers. Helps identify which column the header cell associated to. */}
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Published Year</th>
        </tr>
      </thead>
      <tbody>
        {pages.map((eachBook) => (
          <tr key={`${eachBook._version_}-${eachBook.title}`} data-testid="book">
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
