import { useState, useEffect } from "react";
import BookGrid from "./components/BookGrid";
import { Navbar } from "./components/Navbar";
import axios from "axios";
import GenreSelector from "./components/GenreSelector";
import PagesSelector from "./components/PagesSelector";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import empty from "./assets/Empty.svg";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [pagecount, setPageCount] = useState("");
  const [randomBook, setRandomBook] = useState(null);

  const api = {
    key: import.meta.env.VITE_BOOK_API_KEY,
    base: import.meta.env.VITE_BOOK_API_URL,
  };

  const apiUrl = `${api.base}key=${api.key}`;

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);

      setBooks(response.data.items);
      console.log("API", response.data.items);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterBooksByGenre = () => {
    if (!selectedGenre) {
      return books;
    }
    return books.filter((book) => book.volumeInfo.categories == selectedGenre);
  };

  const handleRandomBook = () => {
    const book =
      filteredBooks()[Math.floor(Math.random() * filteredBooks().length)];
    setRandomBook(book);
  };

  const filteredBooks = () => {
    let filteredBooks = books;

    if (selectedGenre) {
      filteredBooks = filterBooksByGenre();
    }

    if (pagecount === "< 100 pages") {
      filteredBooks = filteredBooks.filter(
        (book) => book.volumeInfo.pageCount < 100
      );
    } else if (pagecount === "100 - 200 pages") {
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.volumeInfo.pageCount >= 100 && book.volumeInfo.pageCount <= 200
      );
    } else if (pagecount === "> 200 pages") {
      filteredBooks = filteredBooks.filter(
        (book) => book.volumeInfo.pageCount > 200
      );
    }

    return filteredBooks;
  };

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="flex flex-row align-center justify-around sm:flex-col mb-[10%] sm:mb-[20%] gap-2">
        <GenreSelector
          books={books}
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
        />
        <PagesSelector pagecount={pagecount} setPageCount={setPageCount} />{" "}
        <div className="sm:mt-[35%] flex flex-col items-center justify-center">
          <button
            className=" flex items-center justify-center w-72 font-medium mt-[20px] bg-pink p-2 rounded hover:shadow-lg uppercase tracking-[0.25em]"
            onClick={handleRandomBook}
          >
            Random Book
          </button>
        </div>
      </div>

      {randomBook ? (
        <div>
          <BookGrid books={[randomBook]} />
          {console.log(randomBook)}
        </div>
      ) : filteredBooks().length === 0 ? (
        <div className="flex flex-col justify-center items-center ">
          <p className="text-3xl font-extrabold">No Books Found!</p>
          <img className="w-1/3 h-auto sm:w-1/2" src={empty} alt="Empty" />
        </div>
      ) : (
        <BookGrid books={filteredBooks()} />
      )}
      <Footer />
    </div>
  );
};

export default App;
