import React from 'react';
import bookSVG from '../img/book.svg';
import { Link } from 'react-router-dom';
const HomePage = () => {
  return (
    <section class='relative min-h-screen bg-gray-500 overflow-x-hidden'>
      <div class='container px-4 mx-auto'>
        <div class='mt-16 lg:mb-24 max-w-md'>
          <div class='max-w-2xl lg:max-w-md mb-6'>
            <h2 class='mb-8 text-4xl md:text-5xl text-white font-bold font-heading'>
              MERN Stack Todo App
            </h2>
            <p class='text-lg text-gray-200 leading-loose'>
              This project was built using Node Js, React, Express and mongoDB.
              This project was built in two part; 1.using traditional redux and
              the second it was built using redux-toolkit. This project will
              teach you everything you need to know about redux and creating API
            </p>
          </div>
          <div class='flex flex-wrap'>
            <Link
              to='/add'
              class='w-full md:w-auto py-3 px-6 md:ml-2 text-sm text-white font-semibold bg-gray-700 hover:bg-gray-800 rounded'>
              Add New Task
            </Link>
          </div>
        </div>
      </div>
      <div class='lg:absolute lg:right-0 lg:top-1/2 mt-16 lg:mt-4 lg:-mr-8 lg:transform lg:-translate-y-1/2 w-full lg:w-1/2 px-4 lg:pb-0 pb-16 lg:pb-0'>
        <img
          class='mx-auto lg:mx-0 lg:ml-auto w-full h-80 lg:h-112 object-cover rounded-lg'
          src={bookSVG}
          alt=''
        />
      </div>
      <div class='hidden navbar-menu relative z-50'>
        <div class='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25'></div>
        <nav class='fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto'>
          <div class='flex items-center mb-8'>
            <a class='mr-auto text-2xl font-semibold leading-none' href='#'>
              <img
                class='h-8'
                src='mockup-assets/logos/shuffle-ux.svg'
                alt=''
                width='auto'
              />
            </a>
            <button class='navbar-close'>
              <svg
                class='h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li class='mb-1'>
                <a
                  class='block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded'
                  href='#'>
                  About
                </a>
              </li>
              <li class='mb-1'>
                <a
                  class='block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded'
                  href='#'>
                  Company
                </a>
              </li>
              <li class='mb-1'>
                <a
                  class='block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded'
                  href='#'>
                  Services
                </a>
              </li>
              <li class='mb-1'>
                <a
                  class='block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded'
                  href='#'>
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div class='mt-auto'>
            <div class='pt-6'>
              <a
                class='block px-6 py-2 mb-3 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded'
                href='#'>
                Sign in
              </a>
              <a
                class='block px-6 py-2 mb-2 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded'
                href='#'>
                Sign up
              </a>
            </div>
            <p class='mt-6 mb-4 text-sm text-center text-gray-400'>
              <span>© 2022 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default HomePage;
