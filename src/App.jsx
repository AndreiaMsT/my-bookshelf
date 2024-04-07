import { useState, useEffect } from "react";
import BookGrid from "./components/BookGrid";
import { Navbar } from "./components/Navbar";
import axios from "axios";

import GenderSelector from "./components/GenderSelector";
import PagesSelector from "./components/PagesSelector";

import Hero from "./Hero";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [pagecount, setPageCount] = useState("");

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

  const filteredBooks = () => {
    let filteredBooks = books;

    if (selectedGenre) {
      filteredBooks = filterBooksByGenre(selectedGenre);
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
      <Hero/>
      <div className="flex flex-col justify-center align-items-center text-center ">
        
        <div>
          <GenderSelector
            books={books}
            selectedGenre={selectedGenre}
            setSelectedGenre={setSelectedGenre}
          />

          <PagesSelector pagecount={pagecount} setPageCount={setPageCount} />
        </div>
      </div>
      {filteredBooks().length === 0 ? (
        <p>No Books Found</p>
      ) : (
        <BookGrid books={filteredBooks()} />
      )}
    </div>
  );
};

export default App;
