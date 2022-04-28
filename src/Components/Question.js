import {BookOpenIcon, ExternalLinkIcon} from '@heroicons/react/outline';
import python from '../images/python-5.svg';
import Avatar from './Avatar';
export default function Question() {
  return (
    <div className='md:flex justify-center items-center w-full h-screen bg-white'>
      <div className='content md:w-1/2 w-full px-36'>
        <p className='uppercase tracking-wider text-xs pb-5'>
          Interact with Community
        </p>
        <h1 className='text-6xl font-space font-bold pb-10'>
          Simple to Interact
        </h1>
        <p className='text-md pr-16 pb-5'>
          A very and smooth UI with different section to communitcate, Ease to
          drive into any topic.
        </p>
      </div>
      <div className='flex md:w-1/2 w-full h-screen bg-gray-50 justify-center items-center relative'>
        <div className='absolute z-0 w-60 bg-white left-10 top-48 rounded-lg py-3 px-3 flex flex-col'>
          {' '}
          Offical Docs are the best way.
          <div className='flex -space-x-1 z-10 overflow-hidden border-t-2 mt-2 py-3'>
            <img
              className='inline-block h-6 w-6 rounded-full ring-2 ring-white mx-2'
              src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />{' '}
            Rohan
          </div>
        </div>
        <div className='absolute z-0 w-60 bg-white right-5 top-20 rounded-lg py-3 px-3 flex flex-col'>
          <div className='flex py-3 px-3'>
            <BookOpenIcon className='w-5 h-5 mr-5' />
            Book: Python Mastery
          </div>
          <div className='flex -space-x-1 z-10 overflow-hidden border-t-2 mt-2 py-3'>
            <img
              className='inline-block h-6 w-6 rounded-full ring-2 ring-white mx-2'
              src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />
            Shakshi
          </div>
        </div>
        <div className='absolute z-0 w-60 bg-white right-10 bottom-20 rounded-lg py-3 px-3 flex flex-col'>
          <div className='flex py-3 px-3'>
            <ExternalLinkIcon className='w-5 h-5 mr-5' />
            youtube.com/py...
          </div>
          <div className='flex -space-x-1 z-10 overflow-hidden border-t-2 mt-2 py-3'>
            <img
              className='inline-block h-6 w-6 rounded-full ring-2 ring-white mx-2'
              src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
              alt=''
            />{' '}
            Shayam
          </div>
        </div>
        <div className=' drop-shadow-2xl z-10 overflow-hidden  bg-white w-72 rounded-xl h-72 flex flex-col items-center '>
          <div className='z-10 relative py-5 border-b-2'>
            <p className='font-space font-bold text-3xl py-1 px-10 '>
              How to Learn Python?
            </p>
            <img
              src={python}
              className='w-20 h-20 absolute top-[-5px] right-[-5px] -z-50 opacity-40'
            />
          </div>
          <div className='z-10 flex flex-wrap gap-3 justify-center items-center py-5'>
            <span className='rounded-md py-1 px-3 bg-sky-200/70 '>#python</span>
            <span className='rounded-md py-1 px-3 bg-pink-200/70 '>
              #coding{' '}
            </span>
            <span className='rounded-md py-1 px-3 bg-yellow-200/70 '>#AI</span>
            <span className='rounded-md py-1 px-3 bg-orange-200/70 '>
              #Machine Learning
            </span>
            <span className='rounded-md py-1 px-3 bg-green-200/70 '>
              #Cloud
            </span>
          </div>
          <div className='z-10 user flex w-full px-5 justify-between '>
            <div>
              <Avatar />
            </div>
            <p className='inline-flex items-center justify-center px-2 py-1 border border-transparent text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700'>
              Discuss
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
