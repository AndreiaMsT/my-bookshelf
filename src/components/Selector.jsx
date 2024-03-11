import { MdOutlineBook } from "react-icons/md";

const Selector = () => {
  return (
    <div className="w-72 font-medium h-80 mt-[20px]">
      <div className="bg-selector w-full p-2 flex items-center justify-center rounded">
        <p>Select Genre</p>
      </div>
      <ul className="bg-selector mt-2 overflow-y-auto max-h-60">
        <div className="flex items-center px-2 justify-around sticky top-0">
         
          <input
            type="text"
            placeholder="Enter genre"
            className="placeholder:text-gray-700 p-2 outline-none"
          />
        </div>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">TEST</li>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">TEST1</li>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">TEST2</li>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">TEST3</li>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">TEST4</li>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">TEST5</li>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">TEST6</li>
        <li className="p-2 text-sm hover:bg-sky-600 hover:text-white">TEST7</li>
      </ul>
    </div>
  );
};

export default Selector;
