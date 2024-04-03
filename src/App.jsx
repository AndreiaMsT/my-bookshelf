import { useState, useEffect } from "react";
import BookGrid from "./components/BookGrid";
import { Navbar } from "./components/Navbar";
import axios from "axios";

import Selector from "./components/Selector";
import PagesSelector from "./components/PagesSelector";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selected, setSelected] = useState("");

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
    if (!selected) {
      return books;
    }
    return books.filter((book) => book.volumeInfo.categories == selected);
  };

  const filterBooksByPageCount = () => {
 
  };

  return (
    <div>
      <Navbar />
      <h1>What do I feel like reading 💭</h1>
      <Selector books={books} selected={selected} setSelected={setSelected} />
      <PagesSelector selected={selected} setSelected={setSelected} />
      <BookGrid books={filterBooksByGenre(selected)} />
    </div>
  );
};

export default App;
