"use client"
import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { IoClose } from 'react-icons/io5'
const SamplePage = () => {

  const [name, setName] = useState('겨울')

  const [num, setNum] = useState(0)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => {setIsOpen(!isOpen)}} className='relative z-10'>
        {isOpen ? <IoClose /> : <FaBars />}
      </button>
      <div className={`fixed top-0 w-full h-full bg-blue-300 
        ${isOpen ? 'left-0' : 'left-full'}`}>전체메뉴</div>

      <div>{num}</div>
      <button onClick={() => {setNum(num + 1)}}>+</button>
      <button onClick={() => {setNum(num - 1)}}>-</button>

      <h2>useState를 이용해 겨울 - 가을</h2>

      <strong>{name}</strong>
      <button onClick={() => {setName(name === '겨울' ? '가을' : '겨울')}}>이름 변경</button>
    </div>
  )
}

export default SamplePage