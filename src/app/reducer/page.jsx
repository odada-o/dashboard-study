"use client"
import React, { useReducer, useState } from 'react'

const buttonStyle = 'px-4 py-2 bg-blue-500 text-white rounded'

// count를 변경해서 다시 보내주는 함수
const setCount = (state, action) => {
  // const action = {type: 'INCREMENT'}
  // switch문으로 action.type에 따라 다른 동작을 수행
  switch (action.type) {
    case 'INCREMENT':
      return {counter: state.counter + 1}
    case 'DECREMENT':
      return {counter: state.counter - 1}
    case 'RESET':
      return {counter: 0}
    default:
      return state
  }
}

const ReducerPage = () => {
  // const [count, setCount] = useState(0)

  // const [현재상태, 파견함수] = useReducer(상태변경함수, 초기값)
  const [count, dispatch] = useReducer(setCount, {
    counter: 0,
  })

  return (
    <div className='flex justify-center gap-4 py-5 text-4xl'>
        <button 
          onClick={() => {dispatch({type: 'DECREMENT'})}}>-</button>
        <strong>{count.counter}</strong>
        <button 
          onClick={() => {dispatch({type: 'INCREMENT'})}}>+</button>

          <button onClick={() => {dispatch({type: 'RESET'})}}>reset</button>
    </div>
  )
}

export default ReducerPage