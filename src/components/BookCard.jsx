import axios from "axios";
import { useEffect, useState } from "react";

const BookCard = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/books/v1/users/106527888210163440438/bookshelves/1002/volumes?",
          {
            params: {
              key: "AIzaSyAL_EgRFmV8iSUFDz3pKGcgCyFv_jWgLOo",
            },
          }
        );

        setBooks(response.data.items);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="flex justify-between flex-col items-center py-[20px]  rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0  bg-pink
     "
    >
      {books.map((book) => (
        <div key={book.volumeInfo.id}>
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
      {/* <img />
     
      <div className="flex flex-row">
        <img />
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-black ">
            Hello
          </h4>
          <p className="font-poppins font-normal text-[16px] leading-[24px] text-black ">
            bye
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default BookCard;
