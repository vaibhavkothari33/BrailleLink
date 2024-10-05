import React from 'react';

const ProjectInfo = () => {
  return (
    <section className="flex flex-col items-center justify-center  mx-20 my-12  md:px-20 bg-green-200">
      <div className="text-center mt-20 max-w-4xl">
        <h1 className="text-8xl font-bold text-black mb-6 ">
          Discover <span className=' text-blue-800'> Vercel</span>
        </h1>
        <p className="text-6xl text-gray-700 mb-4">
          Braille literacy for <span className='text-6xl font-bold text-blue-800'> all</span>
        </p>
        <p className="text-3xl mt-14 text-gray-500 mb-8">
            An accessible companion for the visually <br />
            impaired in today’s digital spaces.
        </p>        

        {/* <button className="px-8 py-3 mb-10 bg-blue-600 text-white text-lg rounded-lg hover:bg-green-700">
          Contact Us
        </button> */}
      </div>
    </section>
  );
};

export default ProjectInfo;
