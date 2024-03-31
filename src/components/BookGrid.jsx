import PropTypes from "prop-types";
import BookCard from "./components/BookCard";

const BookGrid = ({ selected, books }) => {
  const filteredBooks = books.filter(
    (book) => book.volumeInfo.categories === selected
  );
  return (
    <div>
      <h1>My Bookshelf</h1>
      <div>
        {filteredBooks.map((f) => (
          <BookCard key={f.volumeInfo.id} />
        ))}
      </div>
    </div>
  );
};

BookGrid.propTypes = {
  selected: PropTypes.string,
  books: PropTypes.array,
};

export default BookGrid;
