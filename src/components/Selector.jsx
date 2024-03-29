import { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Selector = () => {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

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
      <h1>My next read is...</h1>
      <div className="w-72 font-medium h-80 mt-[20px]">
        <div
          onClick={() => setOpen(!open)}
          className="bg-pink w-full p-2 flex flex-row justify-around rounded"
        >
          {selected ? selected : "Select genre"}
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
                  setSelected(category);
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
