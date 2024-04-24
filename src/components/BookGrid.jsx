import BookCard from "./BookCard";

const BookGrid = ({ books }) => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="mb-[20px] text-3xl font-extrabold ">My selection</h1>

      <div
        className={` ${
          books.length === 1 ? "flex justify-center items-center" : ""
        }grid grid-cols-3 sm:grid-cols-1 sm:mx-2 gap-6 mb-10`}
      >
        {books.map((book) => (
          <BookCard key={book.id} books={book} />
        ))}
      </div>
    </div>
  );
};

export default BookGrid;
