import React from 'react';
import hero_2 from '../images/hero_image_2.png';
import {
  ChatAltIcon,
  ClipboardCheckIcon,
  QuestionMarkCircleIcon,
} from '@heroicons/react/outline';
export const Working = () => {
  return (
    <div className='container w-full h-screen my-10 pl-16'>
      <div className='md:flex justify-center items-center w-full h-full '>
        <div className='md:w-1/2 w-full hidden md:block'>
          <img src={hero_2} className='' />
        </div>
        <div className='content md:w-1/2 w-full h-screen pl-4 md:pr-20 flex justify-center md:items-start items-center flex-col'>
          <p className='uppercase tracking-wider text-xs pb-5'>
            How does Bright Community Works
          </p>
          <h1 className='text-6xl font-space font-bold pb-10'>
            Got Doubt! Just &#8595;
          </h1>
          <div className=' md:pb-5'>
            <div className='flex pb-10'>
              <QuestionMarkCircleIcon className='h-12 w-12 px-2  py-2 rounded-lg text-white  bg-orange-600' />
              <div className='text-lg leading-6 font-medium pl-5 text-gray-900 '>
                Ask your Question
                <span className='block text-base text-gray-500 pr-10'>
                  Post your Question in Community with correct tags and mention
                  any expert if you know
                </span>
              </div>
            </div>
            <div className='flex pb-10'>
              <ChatAltIcon className='h-12 w-12 px-2  py-2 rounded-lg text-white  bg-orange-600' />
              <div className='text-lg leading-6 font-medium px-5 text-gray-900'>
                Discuss in Community
                <span className='block text-base text-gray-500 pr-10'>
                  Members with same interest answers you, Discuss further and
                  master it!
                </span>
              </div>
            </div>
            <div className='flex pb-10'>
              <ClipboardCheckIcon className='h-12 w-12 px-2 py-2 rounded-lg text-white  bg-orange-600' />
              <div className='text-lg leading-6 font-medium px-5 text-gray-900'>
                Get the Perfect Answer
                <span className='block text-base text-gray-500 pr-10'>
                  Get your answers recified by different experts memebers in the
                  community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
