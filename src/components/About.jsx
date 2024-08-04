import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#000000] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-[#76a2d8]'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-left text-2xl font-bold'>
              <p>I'm a Fresh Graduated Software Engineer from Bethlehem University</p>
            </div>
            <div>
            <p>
            <p>
  I am seeking to work as a Software Engineer to further my knowledge in the IT domain and utilize my skills. 
  I am dedicated to continuously learning and acquiring new abilities. 
  My experience includes working as a UI/UX freelancer with Wetrade General Trading in Lebanon, 
  where I honed my design skills. Additionally, I served as a Project Coordinator and Developer for the Souqify Seminar Project, 
  leading efforts to connect merchants and suppliers between Palestine and Turkey. These roles have equipped me with a comprehensive skill set 
  and the ability to manage and execute complex projects effectively.
</p>

</p>

            </div>
          </div>
      </div>
    </div>
  );
};

export default About;