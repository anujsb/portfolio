import React from "react";
// import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  // <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className=' content-center p-[1px] rounded-[20px] shadow-card flex-[1]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  // </Tilt>
); 

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className="text-5xl subpixel-antialiased font-light tracking-wide leading-loose ">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        {/* I m a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life! */}
      </motion.p>
      
        <h4 className="  font-bold text-center">
          front end
        </h4>
        <div className="tools-container">
        <ul className="flex flex-row flex-wrap justify-center">
          <li className="bg-[#1e1e21] rounded-lg h-28 w-28 p-4 m-2 drop-shadow-sm bg-blend-luminosity flex items-center flex-col">
            <div className="w-8 h-8 align-top">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className="h-auto max-w-full">
              <path fill="#FFFFFF" d="M 5.28125 2 C 4.765625 2.09375 4.410156 2.574219 4.46875 3.09375 L 8 42.53125 C 8.046875 42.933594 8.332031 43.265625 8.71875 43.375 L 24.71875 47.96875 C 24.902344 48.023438 25.097656 48.023438 25.28125 47.96875 L 41.28125 43.375 C 41.667969 43.265625 41.953125 42.933594 42 42.53125 L 45.53125 3.09375 C 45.558594 2.8125 45.464844 2.535156 45.273438 2.324219 C 45.082031 2.117188 44.8125 2 44.53125 2 L 5.46875 2 C 5.4375 2 5.40625 2 5.375 2 C 5.34375 2 5.3125 2 5.28125 2 Z M 6.5625 4 L 43.4375 4 L 40.09375 41.65625 L 25 45.9375 L 9.90625 41.65625 Z M 12.53125 10.0625 C 12.015625 10.15625 11.660156 10.636719 11.71875 11.15625 L 13.0625 25.9375 C 13.09375 26.453125 13.515625 26.859375 14.03125 26.875 L 30 26.875 L 29.5625 31.46875 L 25.03125 32.4375 L 20.4375 31.46875 L 20.28125 29.84375 C 20.25 29.316406 19.808594 28.90625 19.28125 28.90625 L 14.40625 28.90625 C 14.125 28.90625 13.855469 29.023438 13.664063 29.230469 C 13.472656 29.441406 13.378906 29.71875 13.40625 30 L 13.96875 36.125 C 14 36.527344 14.269531 36.875 14.65625 37 L 24.59375 40.03125 L 24.71875 40.0625 C 24.902344 40.117188 25.097656 40.117188 25.28125 40.0625 L 35.34375 37 C 35.742188 36.886719 36.027344 36.539063 36.0625 36.125 L 37.375 21.09375 C 37.402344 20.816406 37.3125 20.542969 37.128906 20.335938 C 36.945313 20.128906 36.683594 20.007813 36.40625 20 L 19.375 20 L 19.125 16.90625 L 36.84375 16.90625 C 37.363281 16.910156 37.796875 16.515625 37.84375 16 L 38.28125 11.15625 C 38.308594 10.875 38.214844 10.597656 38.023438 10.386719 C 37.832031 10.179688 37.5625 10.0625 37.28125 10.0625 L 12.71875 10.0625 C 12.65625 10.054688 12.59375 10.054688 12.53125 10.0625 Z M 13.8125 12.0625 L 36.1875 12.0625 L 35.9375 14.90625 L 18.03125 14.90625 C 17.75 14.90625 17.480469 15.023438 17.289063 15.230469 C 17.097656 15.441406 17.003906 15.71875 17.03125 16 L 17.5 21.09375 C 17.546875 21.597656 17.964844 21.988281 18.46875 22 L 35.3125 22 L 34.125 35.28125 L 25 38.03125 L 15.875 35.28125 L 15.5 30.90625 L 18.375 30.90625 L 18.5 32.375 C 18.53125 32.816406 18.847656 33.183594 19.28125 33.28125 L 24.84375 34.4375 C 24.976563 34.464844 25.117188 34.464844 25.25 34.4375 L 30.71875 33.28125 C 31.152344 33.183594 31.46875 32.816406 31.5 32.375 L 32.09375 25.9375 C 32.109375 25.660156 32.011719 25.390625 31.824219 25.191406 C 31.632813 24.988281 31.371094 24.875 31.09375 24.875 L 14.9375 24.875 Z"></path>
            </svg>
                <span className="mt-3 mb-1 font-bold block h-auto max-w-full">HTML</span>
            </div>
          </li>

          <li className="bg-[#1e1e21] rounded-lg h-28 w-28 p-4 m-2 drop-shadow-sm bg-blend-luminosity flex items-center flex-col">
            <div className="w-8 h-8 align-top">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50" className="h-auto max-w-full">
              <path  fill="#FFFFFF"  d="M 39 40 L 25 44 L 11 40 L 8 6 L 42 6 C 41 17.332031 40 28.667969 39 40 Z M 39.816406 8 L 10.183594 8 L 12.871094 38.453125 L 25 41.921875 L 37.128906 38.453125 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z"></path>
            </svg>
                <span className="mt-3 mb-1 font-bold block h-auto max-w-full">CSS</span>
            </div>
          </li>

          <li className="bg-[#1e1e21] rounded-lg h-28 w-28 p-4 m-2 drop-shadow-sm bg-blend-luminosity flex items-center flex-col">
            <div className="w-8 h-8 align-top">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 50 50"className="h-auto max-w-full" >
              <path fill="#FFFFFF" d="M 6.667969 4 C 5.207031 4 4 5.207031 4 6.667969 L 4 43.332031 C 4 44.792969 5.207031 46 6.667969 46 L 43.332031 46 C 44.792969 46 46 44.796875 46 43.332031 L 46 6.667969 C 46 5.207031 44.796875 4 43.332031 4 Z M 6.667969 6 L 43.332031 6 C 43.703125 6 44 6.296875 44 6.667969 L 44 43.332031 C 44 43.703125 43.703125 44 43.332031 44 L 6.667969 44 C 6.296875 44 6 43.703125 6 43.332031 L 6 6.667969 C 6 6.296875 6.296875 6 6.667969 6 Z M 23 23 L 23 35.574219 C 23 37.503906 22.269531 38 21 38 C 19.671875 38 18.75 37.171875 18.140625 36.097656 L 15 38 C 15.910156 39.925781 18.140625 42 21.234375 42 C 24.65625 42 27 40.179688 27 36.183594 L 27 23 Z M 35.453125 23 C 32.046875 23 29.863281 25.179688 29.863281 28.042969 C 29.863281 31.148438 31.695313 32.617188 34.449219 33.789063 L 35.402344 34.199219 C 37.140625 34.960938 38 35.425781 38 36.734375 C 38 37.824219 37.171875 38.613281 35.589844 38.613281 C 33.707031 38.613281 32.816406 37.335938 32 36 L 29 38 C 30.121094 40.214844 32.132813 42 35.675781 42 C 39.300781 42 42 40.117188 42 36.683594 C 42 33.496094 40.171875 32.078125 36.925781 30.6875 L 35.972656 30.28125 C 34.335938 29.570313 33.625 29.109375 33.625 27.964844 C 33.625 27.039063 34.335938 26.328125 35.453125 26.328125 C 36.550781 26.328125 37.253906 26.792969 37.90625 27.964844 L 40.878906 26.058594 C 39.625 23.84375 37.878906 23 35.453125 23 Z"></path>
            </svg>
                <span className="mt-3 mb-1 font-bold block h-auto max-w-full">JS</span>
            </div>
          </li>
          <li className="bg-[#1e1e21] rounded-lg h-28 w-28 p-4 m-2 drop-shadow-sm bg-blend-luminosity flex items-center flex-col">
            <div className="w-8 h-8 align-top">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" className="h-auto max-w-full">
              <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
            </svg>
                <span className="mt-3 mb-1 font-bold block h-auto max-w-full">HTML</span>
            </div>
          </li>
        </ul>


        </div>
      {/* <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");