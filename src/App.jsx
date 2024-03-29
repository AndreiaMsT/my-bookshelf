
import BookCard from "./components/BookCard";
import { Navbar } from "./components/Navbar";

import Selector from "./components/Selector";

const App = () => {
  return (
    <div>
      <Navbar />
      <Selector />{" "}
      <BookCard/>
      
    </div>
  );
};

export default App;
