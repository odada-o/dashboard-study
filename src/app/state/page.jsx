'use client';

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';

const StatePage = () => {
  // const [상태이름, 상태변경함수] = useState(초기);

  const [name, setName] = useState('김겨울');

  const chageName = () => {
    setName(name === '김겨울' ? '김가을' : '김겨울');
  };

  const [number, setNumber] = useState(0);

  const increase = () => {
    setNumber(number + 1);
  };
  const decrease = () => {
    setNumber(number - 1);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {/* {isOpen ? 'x' : '='} */}
        {isOpen ? <IoCloseSharp /> : <FaBars />}
      </button>
      <hr />
      <button onClick={decrease}>감소</button>
      <strong>{number}</strong>
      <button onClick={increase}>증가</button>

      <hr />
      <strong className='block'>{name}</strong>
      <button
        onClick={chageName}
        className='p-1 bg-primary-30'
      >
        이름 변경
      </button>
      <h2>useState</h2>
    </div>
  );
};

export default StatePage;
