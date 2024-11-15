"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const navItemsData = [
  { href: '/about', label: 'about' },
  { href: '/state', label: 'state' },
  { href: '/login', label: 'login' },
]

const NavLink = ({ children, href }) => {
  const pathname = usePathname(); // 현재 경로를 가져옴
  const isActive = pathname === href;

  return (
    <Link href={href} 
            className={`py-2 
            ${ isActive ? 'text-primary' : ''}`}>
              { children }
              </Link>
  )
}

const Header = () => {

  return (
    <header className='bg-gray-200 p-4 mb-10 flex justify-between items-center'>
      <h1>
        <Link href='/'>logo</Link>
      </h1>
      <nav>
        <ul className='flex gap-5'>
          <li>
            <NavLink href="/about">about</NavLink>
          </li>
          <li>
            <NavLink href="/state">state</NavLink>
          </li>
          <li>
            <NavLink href="/login">login</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
