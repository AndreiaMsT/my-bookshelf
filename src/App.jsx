import { useState } from "react";
import BookGrid from "./components/BookGrid";
import { Navbar } from "./components/Navbar";


import Selector from "./components/Selector";

const App = () => {
  const [books, setBooks] = useState([]);
  const [selected, setSelected] = useState("");

  const api = {
    key: import.meta.env.VITE_BOOK_API_KEY,
    base: import.meta.env.VITE_BOOK_API_URL,
  };
 

  return (
    <div>
      <Navbar />
      <Selector api={api} books={books} setBooks={setBooks} selected={selected} setSelected={setSelected} />
      <BookGrid selected={selected} books={books}/>
    </div>
  );
};

export default App;
