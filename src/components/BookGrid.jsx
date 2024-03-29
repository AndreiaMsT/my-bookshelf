// BookShelfComponent.js

import  { useState, useEffect } from 'react';
import axios from 'axios';


const BookGrid = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from your shelf using the Google Books API
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/users/106527888210163440438/bookshelves/1002/volumes?',
          {
            params: {
              key: "AIzaSyAL_EgRFmV8iSUFDz3pKGcgCyFv_jWgLOo", // Replace with your Google Books API key
            },
          }
        );
      
        console.log(response.data.items)
      
        setBooks(response.data.items); // Store the fetched books in state
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to ensure useEffect runs only once

  return (
    <div>
      <h1>My Bookshelf</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>{book.volumeInfo.title} - {book.volumeInfo.authors} - {book.volumeInfo.categories}</li>
        ))}
      </ul>
    </div>
  );
};

export default BookGrid;
