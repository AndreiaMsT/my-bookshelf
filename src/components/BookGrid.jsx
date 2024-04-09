import BookCard from "./BookCard";

const BookGrid = ({ books }) => {
  console.log("bookgrid", books);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-[20px]">My Bookshelf</h1>
      <div className="grid grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} books={book} />
        ))}
      </div>
    </div>
  );
};

export default BookGrid;
