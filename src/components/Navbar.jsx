import pileOfBooks from "../assets/books.svg";


export const Navbar = () => {
    const getViewBox = () => {
        if (window.innerWidth < 640) {
          return "0 0 900 320"; 
        } else {
          return "0 80 1440 320";
        }
      };
  return (
    <div className="relative wave-header">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox={getViewBox()}>
        <path
          fill="#F6EBF3"
          d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,144C840,128,960,128,1080,133.3C1200,139,1320,149,1380,154.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <nav className="relative z-10 w-full flex justify-between items-center p-4">
        <div className="flex items-center">
          <p className="flex items-center">
            MyBookshelf{" "}
            <img
              src={pileOfBooks}
              className="h-[30px] w-[30px] ml-2"
              alt="pile of books"
            />
          </p>
        </div>
      
      </nav>
    </div>
  );
};
