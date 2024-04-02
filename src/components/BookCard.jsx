

const BookCard = ({books}) => {
console.log("bookcard", books)
  return (
    <div
      className="flex justify-between flex-col items-center py-[20px]  rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0  bg-pink
     "
    >
    
      
        <div  >
          
          <p className="font-poppins font-normal text-[18px] leading-[32px] text-black my-10">
            {books.volumeInfo.title}
          </p>
          <img src={books.volumeInfo.imageLinks.thumbnail} alt="" />
          <p>Description:{books.volumeInfo.description}</p>
          <p>No. pages:{books.volumeInfo.pageCount} </p>
          <a target="_blank" href={books.volumeInfo.previewLink}>
            Preview
          </a>{" "}
        </div>
     

    </div>
    
  );
};


export default BookCard;
