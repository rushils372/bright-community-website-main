import {ArrowUpIcon} from '@heroicons/react/outline';
import logo from '../images/logo.png';
export default function Footer() {
  return (
    <div>
      <footer className='px-4 py-8 bg-orange-500/20'>
        <div className='container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between  sm:space-y-0'>
          <div className='flex flex-row pr-3 space-x-4 sm:space-x-8'>
            <div className='flex items-center justify-center flex-shrink-0  rounded-full '>
              <div className='w-48'>
                <img
                  src={logo}
                  alt='Logo'
                  className='object-fit w-full h-full'
                />
              </div>
            </div>
            <ul className='flex text-gra flex-wrap items-center space-x-4 sm:space-x-8'>
              <li>
                <a rel='noopener noreferrer' href='#'>
                  A better place for Free Education
                </a>
              </li>
            </ul>
          </div>
          <ul className='flex flex-wrap pr-5 space-x-4 sm:space-x-8'>
            <li>
              <a rel='noopener noreferrer' href='#'>
                <div className=' text-xl animate-bounce'>&#8593;</div>
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
