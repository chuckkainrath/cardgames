import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { Transition } from "@headlessui/react";
import logo from './bjkids.png'

const NavBar = () => {
  const user = useSelector(state => state.session.user);
  const [isOpen, setIsOpen] = useState(false);
  const [WLR, setWLR] = useState(null)

useEffect(() => {
  if (user) {
    setWLR(Math.round((user.wins/user.losses) * 100))
  }
},[user]);

  if (!user) return null;


  return (
    <div>
      <nav className="bg-black">
        <div className="max-w-9xl mx-auto px-4 sm:px-6  lg:px-8">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src={logo}
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">

                  <NavLink to='/home'
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  > Home </NavLink>

                  <NavLink to='/single-player'
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  > Single-Player </NavLink>

                  <NavLink to='/multi-player'
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  > Multi-Player </NavLink>

                  <NavLink to='/about'
                    className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  > Contact the Developers </NavLink>

                  <LogoutButton> </LogoutButton>

                </div>
              </div>
            </div>
              <div className='inline-flex items-end justify-end text-white text-xs'>
                <p className='pr-4'>Welcome, {user.username}</p>
                W / L: {WLR}%
              </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">


                <NavLink
                  to='/home'
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </NavLink>

                   <NavLink
                  to='/single-player'
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Single-Player
                </NavLink>

                  <NavLink
                  to='/multi-player'
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Multi-Player
                </NavLink>

                  <NavLink
                  to='/single-player'
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Single-Player
                </NavLink>

                   <NavLink
                  to='/about'
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact the Developers
                </NavLink>

                <LogoutButton> </LogoutButton>
              </div>
            </div>
          )}
        </Transition>
      </nav>

    </div>
  );
}

export default NavBar;
