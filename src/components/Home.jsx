import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-hero bg-cover'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#F4F5F0]'>Hello, my name is</p>
        <h1 className='text-2xl sm:text-5xl font-bold text-[#F4F5F0]'>
          Suzan Ayesh
        </h1>
        <h2 className='text-2xl sm:text-5xl font-bold text-[#F4F5F0]'>
          I'm a Software Engineer.
        </h2>
        <p className='text-[#F4F5F0] py-4 max-w-[700px] font-bold'>
          Welcome To My Portfolio.
        </p>
        <div>
          <Link to='works' smooth={true} duration={500}>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FFF44F] hover:border-[#76a2d8]'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
