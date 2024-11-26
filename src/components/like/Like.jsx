import { BtnProvider, useBtn } from '@/contexts/BtnContext'
import classNames from 'classnames'
import { Heart } from 'lucide-react'
import React, { createContext, useContext, useState } from 'react'

const Like = () => {
  return (
    <>
      <BtnLike />
      <BtnFollow />
    </>
  )
}

const BtnLike = () => {
  const {isLiked, toggleLike} = useBtn()

  return (
    <button 
      onClick={toggleLike}>
      <Heart fill={isLiked ? "red" : ""} />
    </button>
  )
}
const BtnFollow = () => {
  const {isLiked, toggleLike} = useBtn()
  return (
      <button 
        onClick={toggleLike}
        className={classNames(
        isLiked ? 'bg-gray-400' : 'bg-green-500'
      )}>+팔로우</button>
  )
}

export default Like