import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
  const {bookId,bookName,image,author,tags,category,rating} = book;
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 w-70 shadow-xl py-6">
    <figure className='bg-blue-200 py-8 rounded-2xl'>
      <img 
      className="h-[166px] "
        src={image}
        alt="books" />
    </figure>
   
    <div className="card-body">
    <div className="flex justify-center gap-4">
    {
      tags.map((tag,index) => <button key={index} className="btn btn-xs text-[#23BE0A] bg-[#23BE0A0D]">{tag}</button>)
    }
    </div>
      <h2 className="card-title">
       {bookName}
        <div className="badge badge-secondary">{author}</div>
      </h2>
      <p>Written By:{author}</p>
      <div className="card-actions justify-between">
        <div className="badge badge-outline">{category}</div>
        <div className="badge badge-outline">Rating:{rating}</div>
      </div>
    </div>
  </div>
    </Link>
  );
};

export default Book;