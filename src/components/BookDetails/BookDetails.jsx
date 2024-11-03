import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = () => {
  const data = useLoaderData()
  const {bookId} = useParams()
  const id = parseInt(bookId)
  const book = data.find(book => book.bookId === id) 
  const {author,bookName,bookId:eachBookId,image,review,totalPages,rating,publisher} = book
  return (
    <div>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={image}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
       <h2>By:{author}</h2>
      <h1 className="text-5xl font-bold">{bookName}</h1>
      <p className="py-6">
       {review}
      </p>
      <p>Total Pages:{totalPages}</p>
      <p>Rating:{rating}</p>
      <p>Published By:{publisher}</p>
    </div>
  </div>
</div>
       <button className="btn btn-outline mr-4 btn-accent">Read</button>
       <button className="btn btn-accent">Wishlist</button>
    </div>
  );
};

export default BookDetails;