import bookLover from "../assets/Book lover.svg";
import goodreadsIcon from "../assets/goodreads-icon.svg";

const Hero = () => {
  return (
    <div className="flex flex-row sm:flex-col items-center justify-center m-[5%] sm:mt-[20%] ">
      <div className="flex flex-col">
        <h1 className="text-3xl font-extrabold mb-[20px] sm:text-center">What do I feel like reading? 💭</h1>
        <p className="text-lg mb-[20px]">
          This is my personal library where I can select my next read from the
          books I own.<br/>Using Google Books API to access my library.
        </p>
        <a
          href="https://www.goodreads.com/user/show/135436782-andreia-t"
          className="relative z-10"
          target="_blank"
        >
          <img
            src={goodreadsIcon}
            className="h-[30px] w-[30px]"
            alt="goodreads icon"
          />
        </a>
      </div>
      <img className="w-1/3 h-auto sm:w-1/2 " src={bookLover} />
    </div>
  );
};

export default Hero;
