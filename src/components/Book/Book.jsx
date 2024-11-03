import React from 'react';

const Book = ({book}) => {
  const {bookName,image,author} = book;
  return (
    <div className="card bg-base-100 w-70 shadow-xl py-6">
    <figure className='bg-blue-200 py-8 rounded-2xl'>
      <img 
      className="h-[166px] "
        src={image}
        alt="books" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
       {bookName}
        <div className="badge badge-secondary">{author}</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
  );
};

export default Book;