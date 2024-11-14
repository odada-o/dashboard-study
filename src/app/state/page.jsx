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

  return (
    <div>
      <div className='flex gap-3 justify-center'>
        {sortArr.map((item, index) => (
          <button
            key={index}
            className='py-2 flex items-center flex-col'
          >
            <GiGooeyMolecule />
            {item.value}
          </button>
        ))}
      </div>
      {/* tab content */}
      <div>선택된 탭 내용</div>

      <hr />
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
