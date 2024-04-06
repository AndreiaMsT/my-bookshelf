import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const PagesSelector = ({ pagecount, setPageCount }) => {
  const [open, setOpen] = useState(false);
  const numberOfPages = ["< 100 pages", "100 - 200 pages", "> 200 pages"];

  return (
    <div className="mt-[100px] sm:mt-[10%] flex flex-col items-center justify-center">
      <div className="w-72 font-medium h-80 mt-[20px]">
        <div
          onClick={() => setOpen(!open)}
          className="bg-pink w-full p-2 flex flex-row justify-around rounded"
        >
          {pagecount ? pagecount : "Select book's length"}
          
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
          {numberOfPages.map((pages, index) => (
            <li
              className="p-2 hover:bg-white cursor-pointer"
              key={index}
              onClick={() => {
                if (pages) {
                  setPageCount(pages);
                  setOpen(!open);
                }
              }}
            >
              {pages}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PagesSelector;
