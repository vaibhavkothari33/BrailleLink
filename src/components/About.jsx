import React, { forwardRef, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = forwardRef((props, ref) => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '0px 0px -200px 0px' });

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-white px-6 md:px-24 py-12" ref={sectionRef}>
      <h2 className="text-7xl font-bold text-blue-600 mb-12">What is Vercel all about?</h2>

      {/* Section 1 */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between w-full mb-12"
        initial={{ opacity: 0, x: 50 }} // Coming from right
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
      >
      
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://wonder-reader.id/assets/diagrams/diagram-1.webp"
            alt="Diagram 1"
            className="w-full h-auto border-4 border-purple-500 shadow-lg rounded-2xl" 
          />
        </div>
       
        <div className="w-full md:w-1/2 md:pl-12">
          <p className="text-xl text-gray-700">
            Accessing the digital world can be difficult. This is especially the case for the visually impaired, especially those that are dependent on braille-based tech.
          </p>
        </div>
      </motion.div>

      {/* Section 2 */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between w-full mb-12"
        initial={{ opacity: 0, x: -50 }} // Coming from left
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8 }}
      >
      
        <div className="w-full md:w-1/2 md:pr-12">
          <p className="text-xl text-gray-700">
            Vercel simplifies interaction with modern technology, bridging the gap for braille users to access critical information seamlessly.
          </p>
        </div>
       
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://wonder-reader.id/assets/diagrams/diagram-2.webp"
            alt="Diagram 2"
            className="w-full h-auto border-4 border-purple-500 shadow-lg rounded-2xl" 
          />
        </div>
      </motion.div>

      {/* Section 3 */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between w-full mb-12"
        initial={{ opacity: 0, x: 50 }} // Coming from right
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        transition={{ duration: 0.8 }}
      >
       
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src="https://wonder-reader.id/assets/diagrams/diagram-3.webp"
            alt="Diagram 3"
            className="w-full h-auto border-4 border-purple-500 shadow-lg rounded-2xl" 
          />
        </div>
      
        <div className="w-full md:w-1/2 md:pl-12">
          <p className="text-xl text-gray-700">
            By combining innovative tactile feedback with voice technology, Vercel opens a world of possibilities for visually impaired users.
          </p>
        </div>
      </motion.div>
    </section>
  );
});

export default About;
