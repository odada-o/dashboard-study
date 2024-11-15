"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Header = () => {

  const pathname = usePathname(); // 현재 경로를 가져옴

  return (
    <header className='bg-gray-200 p-4 mb-10 flex justify-between items-center'>
      <h1>
        <Link href='/'>logo</Link>
      </h1>
      <nav>
        <ul className='flex gap-5'>
          <li>
            <Link href='/about' 
            className={`py-2 
            ${ pathname === '/about' ? 'text-primary' : ''}`}>about</Link>
          </li>
          <li>
            <Link href='/state' className={`py-2 
            ${ pathname === '/state' ? 'text-primary' : ''}`}>state</Link>
          </li>
          <li>
            <Link href='/login' className={`py-2 
            ${ pathname === '/login' ? 'text-primary' : ''}`}>login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
