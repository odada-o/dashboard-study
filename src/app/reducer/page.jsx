import React, { useState } from 'react'

const buttonStyle = 'px-4 py-2 bg-blue-500 text-white rounded'

const ReducerPage = () => {

  const [count, setCount] = useState(0)

  return (
    <div className='flex justify-center gap-4 py-5 text-4xl'>
        <button 
          onClick={() => {setCount(count - 1)}} 
          className={buttonStyle}>-</button>
        <strong className=' text-red-600'>{count}</strong>
        <button 
          onClick={() => {setCount(count + 1)}}  
          className={buttonStyle}>+</button>
    </div>
  )
}

export default ReducerPage