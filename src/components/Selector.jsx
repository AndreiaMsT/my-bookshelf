import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Selector = ({ books, selectedGenre, setSelectedGenre }) => {
  const [open, setOpen] = useState(false);

  let uniqueCategories = [];

  books.forEach((book) => {
    book.volumeInfo.categories.forEach((category) => {
      if (!uniqueCategories.includes(category)) {
        uniqueCategories.push(category);
      }
    });
  });

  return (
    <div className="mt-[100px] sm:mt-[10%] flex flex-col items-center justify-center">
     
      <div className="w-72 font-medium h-80 mt-[20px]">
        <div
          onClick={() => setOpen(!open)}
          className="bg-pink w-full p-2 flex flex-row justify-around rounded"
        >
          {selectedGenre ? selectedGenre : "Select genre"}
          {console.log("selectgenre",selectedGenre)}
          <div className="flex items-center ">
            {" "}
            <FontAwesomeIcon
              icon={faChevronDown}
              className={`cursor-pointer ${open && "rotate-180"}`}
            />
          </div>
        </div>

        <ul
          className={`bg-selector mt-2  max-h-60 ${
            open ? "max-h-60 " : "hidden"
          } `}
        >
          {uniqueCategories.map((category, index) => (
            <li
              className="p-2 hover:bg-white cursor-pointer"
              key={index}
              onClick={() => {
                if (category) {
                  setSelectedGenre(category);
                  setOpen(!open);
                }
              }}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

     
    </div>
  );
};

export default Selector;
