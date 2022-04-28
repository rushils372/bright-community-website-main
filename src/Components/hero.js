import React from 'react';
import hero from '../images/hero_image.png';
import '@fontsource/space-grotesk';
export const Hero = () => {
  return (
    <div className='md:flex justify-center items-center w-full h-screen bg-white'>
      <div className='content md:w-1/2 w-full px-16'>
        <p className='uppercase tracking-wider text-xs pb-5'>Introducing</p>
        <h1 className='text-6xl font-space font-bold pb-10'>
          Welcome to Bright Community
        </h1>
        <h3 className='text-orange-600 text-xl pb-5'>
          <span className='pr-3'>Ask</span>&#8226;
          <span className='px-3'>Discuss</span>&#8226;
          <span className='px-3'>Learn</span>
        </h3>
        <p className='text-md pr-16 pb-5'>
          Bright Community is a community of learners, formed by students and
          working and professional helping each to other to learn and build
          everyday something new.
        </p>
        <a href="https://bright-community-d.web.app/" target="_blank"><button className='btn pb-5'>Join Now</button></a>
        <div className='absolute bottom-10 md:w-1/2 w-full text-xl animate-bounce'>
          &#8595;
        </div>
      </div>
      <div className='md:w-1/2 w-full h-1/2  flex justify-center items-center md:overflow-visible overflow-hidden py-10'>
        <img src={hero} className='w-1/2 md:w-auto' />
      </div>
    </div>
  );
};
