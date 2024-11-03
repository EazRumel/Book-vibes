import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
     const [books,setBooks] = useState([])
     useEffect(()=>{
      fetch('./booksData.json')
      .then(response => response.json())
      .then(data => setBooks(data))
     },[])
  return (
    <div>
        <h1 className='font-bold text-4xl text-center'>Books</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
        {
          books.map(book => <Book book={book} key={book.bookId}></Book>)
        }
      </div>
    </div>
  );
};

export default Books;