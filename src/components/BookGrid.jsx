
import BookCard from "./BookCard";

const BookGrid = ({ books}) => {
console.log("bookgrid", books)
  return (
    <div>
      <h1>My Bookshelf</h1>

      {books.map((book) => (
        <BookCard key={book.id} books={book} />
      ))}
      
    </div>
  );
};



export default BookGrid;
