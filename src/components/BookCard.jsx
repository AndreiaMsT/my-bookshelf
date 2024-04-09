const BookCard = ({ books }) => {
  console.log("bookcard", books);
  const description = books.volumeInfo.description;
  return (
    <div
      className="flex flex-col justify-center items-center rounded-[20px] max-w-[370px] sm:mx-2  mr-0  bg-pink p-5 transform transition-transform hover:scale-105
     "
    >
      <div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-poppins font-extrabold text-[1rem] leading-[32px] text-black my-5">
            {books.volumeInfo.title}
          </p>
          <img
            src={books.volumeInfo.imageLinks.thumbnail}
            alt="books"
            className="mb-5"
          />
        </div>
        <p className="mb-2">
          {description.length > 200
            ? description.substring(0, 200) + "..."
            : description}
          {description.length > 200 && (
            <a
              href={books.volumeInfo.infoLink}
              target="_blank"
              className="font-bold"
            >
              Full Description
            </a>
          )}
        </p>
        <p className="mb-2 ">
          <span className="font-bold">Pages:</span> {books.volumeInfo.pageCount}{" "}
        </p>
        <a
          className="underline underline-offset-1 font-bold"
          target="_blank"
          href={books.volumeInfo.previewLink}
        >
          Preview
        </a>{" "}
      </div>
    </div>
  );
};

export default BookCard;
