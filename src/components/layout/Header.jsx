import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='bg-gray-800 p-4'>
      <h1 className='text-white text-2xl'>logo</h1>

      <nav>
        <ul className='flex space-x-4'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => `text-white hover:text-yellow-500 ${isActive ? 'text-yellow-500' : ''}`}
            >
              home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about'
              className={({ isActive }) => `text-white hover:text-yellow-500 ${isActive ? 'text-yellow-500' : ''}`}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact'
              className={({ isActive }) => `text-white hover:text-yellow-500 ${isActive ? 'text-yellow-500' : ''}`}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
