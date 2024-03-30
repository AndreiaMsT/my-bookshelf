
import BookCard from "./components/BookCard";
import BookGrid from "./components/BookGrid";
import { Navbar } from "./components/Navbar";

import Selector from "./components/Selector";

const App = () => {

  const [books, setBooks] = useState([]);

  const api = {
    key: process.env.BOOK_API_KEY,
    base: process.env.BOOK_API_URL,
  };
  return (
    <div>
      <Navbar />
      <Selector />{" "}
      <BookGrid/>
      
    </div>
  );
};

export default App;
