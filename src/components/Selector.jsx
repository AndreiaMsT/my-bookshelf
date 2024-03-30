import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Selector = ({ api }) => {
  const [books, setBooks] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${api.base}key=${api.key}`);

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

Selector.propTypes = {
  api: PropTypes.shape({
    base: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
  }).isRequired,
};

export default Selector;
