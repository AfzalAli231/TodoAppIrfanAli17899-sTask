import React from 'react';
import { ClipboardListIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
const Navbar = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
      localStorage.removeItem("user");
      setTimeout(() => {
        window.location.href = "/"
      }, 1000);
  }
  return (
    <nav className="relative px-10 py-8 bg-gray-500">
      <div className="flex justify-between items-center">
        {/* <a className='text-gray-600 text-2xl leading-none' href='#'> */}
        <Link to="/" className="text-sm text-gray-50 hover:text-gray-200">
          <ClipboardListIcon className="h-10 w-10 text-yellow-500" />
        </Link>
        {/* </a> */}
        <div className="lg:hidden">
          <button className="block navbar-burger text-gray-50 hover:text-gray-200 focus:outline-none">
            <svg
              className="h-4 w-4"
              fill="currentColor "
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex ml-auto mr-auto items-center w-auto space-x-12">
          <li>
            <Link to="/" className="text-sm text-gray-50 hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/todos"
              className="text-sm text-gray-50 hover:text-gray-200"
            >
              Tasks
            </Link>
          </li>
          {user ? (
            <li>
              <Link
                to="/profile"
                className="text-sm text-gray-50 hover:text-gray-200"
              >
                My Profile
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/register-login"
                className="text-sm text-gray-50 hover:text-gray-200"
              >
                Login/Register
              </Link>
            </li>
          )}
          {user !== null && user.isAdmin !== null && user.isAdmin === true && (
            <li>
              <Link
                to="/admin"
                className="text-sm text-gray-50 hover:text-gray-200"
              >
                Dashboard
              </Link>
            </li>
          )}
        </ul>
        <ul className="hidden lg:flex items-center w-auto space-x-12">
          <li>
            <Link
              to="/add"
              className="block px-6 py-3 text-sm text-gray-50 hover:text-gray-200 font-bold border border-gray-100 hover:border-gray-200 rounded"
            >
              Add New Task
            </Link>
          </li>
          {user && (
            <li>
              <button
                onClick={handleLogout}
                to="/"
                className="block px-6 py-3 text-sm text-gray-50 hover:text-gray-200 font-bold border border-gray-100 hover:border-gray-200 rounded"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
      {/* Mobile */}
      <div className="hidden navbar-menu relative z-50">
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-2xl font-semibold leading-none" href="#">
              <img
                className="h-8"
                src="mockup-assets/logos/shuffle-ux.svg"
                alt=""
                width="auto"
              />
            </a>
            <button className="navbar-close">
              <svg
                className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div>
            <ul>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  About..
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  Company
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  Services
                </a>
              </li>
              <li className="mb-1">
                <a
                  className="block p-4 text-sm font-semibold text-gray-900 hover:bg-gray-50 rounded"
                  href="#"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-6 py-2 mb-3 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded"
                href="#"
              >
                Sign In
              </a>
              <a
                className="block px-6 py-2 mb-2 text-sm text-center text-gray-500 hover:text-gray-600 font-bold leading-loose border border-gray-100 hover:border-gray-200 rounded"
                href="#"
              >
                Contact Us
              </a>
            </div>
            <p className="mt-6 mb-4 text-sm text-center text-gray-400">
              <span>© 2021 All rights reserved.</span>
            </p>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
