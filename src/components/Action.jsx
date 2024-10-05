import React from 'react';
import { motion } from 'framer-motion';

const Action = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6 md:px-24 py-12">
      <h2 className="text-6xl font-bold text-blue-600 mb-8">Braille Anywhere, Anytime</h2>
      {/* <h2 className="text-6xl font-bold text-blue-600 mb-8">Braille <span className='italic'>Anywhere, Anytime</span></h2> */}

      <h3 className="text-3xl font-semibold text-blue-700 my-12">Vercel Device Feature</h3>

      <div className="flex flex-col md:flex-row w-full gap-12 justify-between mb-12">

        {/* To Read */}
        <motion.div
          className="w-full md:w-1/2 p-6 bg-white border-2 border-gray-200 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="border-4 border-purple-500 rounded-lg p-4">
            <h4 className="text-3xl font-bold text-green-600 mb-4">To Read</h4>
            <p className="text-lg text-gray-700">
              Reading with a Braille keyboard is advantageous for individuals who are blind or visually impaired. It promotes independence, literacy, and efficiency, providing a private means of communication.
            </p>
          </div>
        </motion.div>

        {/* To Write */}
        <motion.div
          className="w-full md:w-1/2 p-6 bg-white border-2 border-gray-200 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="border-4 border-purple-500 rounded-lg p-4">
            <h4 className="text-3xl font-bold text-green-600 mb-4">To Write</h4>
            <p className="text-lg text-gray-700">
              Writing on a Braille keyboard is crucial for the blind. It enhances educational and employment prospects, aids navigation, and integrates with technology through Braille displays.
            </p>
          </div>
        </motion.div>
      </div>

      <motion.button
        className="px-6 py-3 text-white rounded-lg shadow-lgtransition-all mb-8"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
      
        {/* <h2 className="text-6xl font-bold text-orange-600 mb-8"> Watch Wonder Reader in Action!</h2> */}
        <h2 className="text-6xl font-bold text-blue-600 mb-8"> Watch Wonder Reader in Action!</h2>
      </motion.button>

    {/* YouTube Video Embed */}
<motion.div
  className="mx-auto h-[240px] w-[340px] px-4 py-4 lg:h-[540px] lg:w-[960px] lg:px-7 lg:py-8 "
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <iframe
    className="mx-auto h-[240px] w-[340px] px-4 py-4 lg:h-[540px] lg:w-[960px] lg:px-7 lg:py-8"
    src="https://www.youtube.com/embed/pDz9ninrRtg?si=g8hK6_OOmGgTbWhd" 
    title="Wonder Reader in Action"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
</motion.div>
    </section>
  );
};

export default Action;
