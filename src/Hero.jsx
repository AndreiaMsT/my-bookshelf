import bookLover from "./assets/Book lover.svg";

const Hero = () => {
  return (
    <div className="flex flex-row items-center justify-center m-[5%] ">
      <div className="flex flex-col">
        <h1 className="text-xl mb-[20px]">What do I feel like reading? 💭</h1>
        <p>
          This is my personal library where I can select my next read from the
          books I own.
        </p>
        <p>I utilize Google Books to access my library.</p>
      </div>
      <img className="w-1/3 h-auto " src={bookLover} />
    </div>
  );
};

export default Hero;
