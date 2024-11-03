import React from 'react';
import bannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <img 
        src={bannerImg}
        className="max-w-sm rounded-lg shadow-2xl lg:w-[900px] w-[300px]" />
      <div>
        <h1 className="text-5xl font-bold text-center">Books to freshen up your bookshelf</h1>
       
        <button className="btn bg-[#23BE0A] lg:ml-[350px] mt-5">View The List</button>
      </div>
    </div>
  </div>
  );
};

export default Banner;