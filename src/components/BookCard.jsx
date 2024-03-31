import PropTypes from "prop-types";

const BookCard = ({books}) => {


  return (
    <div
      className="flex justify-between flex-col items-center py-[20px]  rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0  bg-pink
     "
    >
      {books.map((book, index) => (
        <div key={index} >
          <p className="font-poppins font-normal text-[18px] leading-[32px] text-black my-10">
            {book.volumeInfo.title}
          </p>
          <img src={book.volumeInfo.imageLinks.thumbnail} alt="" />
          <p>Description:{book.volumeInfo.description}</p>
          <p>No. pages:{book.volumeInfo.pageCount} </p>
          <a target="_blank" href={book.volumeInfo.previewLink}>
            Preview
          </a>{" "}
        </div>
      ))}
   
    </div>
  );
};
BookCard.propTypes = {
 
  books: PropTypes.array,
  
};

export default BookCard;
