'use client';

import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { GiGooeyMolecule } from 'react-icons/gi';
import { SiGumtree } from 'react-icons/si';
import { MdOutlineOtherHouses } from 'react-icons/md';
import { SiTreehouse } from 'react-icons/si';

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

  const sortArr = [
    { value: '컬처 아이콘', icon: <GiGooeyMolecule /> },
    { value: '한적한 시골', icon: <SiGumtree /> },
    { value: '편안한 숙소', icon: <MdOutlineOtherHouses /> },
    { value: '숙소', icon: <SiTreehouse /> },
  ];

  const [selected, setSelected] = useState(0);

  return (
      <div className='py-20 flex flex-col items-center gap-10'>
        <div>
        <input
          type='text'
          placeholder='안녕하세요.'
          value='안녕하세요.'
          className='bg-red-200 '
        />
        <p>안녕하세요.</p>
        </div>

          <div>
        <div className='flex gap-5 justify-center'>
          {sortArr.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setSelected(index);
              }}
              className={`py-2 ${selected === index ? 'bg-primary' : ''}`}
            >
              {item.icon}
              {item.value}
            </button>
          ))}
        </div>
        {/* tab content */}
        {sortArr.map((item, index) => (
          <div
            key={index}
            className={`w-full p-5 min-h-40 ${selected === index ? 'block' : 'hidden px-2 py-2'}`}
          >
            {item.value} 내용
          </div>
        ))}
</div>
div     
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
