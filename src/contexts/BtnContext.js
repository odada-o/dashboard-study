"use client"

import { createContext, useContext, useState } from "react";

// 생성(보급품 만들기)
const BtnContext = createContext();

// 보급(드론)
export const BtnProvider = ({children}) => {
  const [isLiked, setIsLiked] = useState(false)
  const toggleLike = () => {setIsLiked(!isLiked)}
  return (
    <BtnContext.Provider value={{isLiked, toggleLike}}>
      {children}
    </BtnContext.Provider>
  )
}

// 투척(드론)
export const useBtn = () => {
  const context = useContext(BtnContext)
  if (!context) {
    throw new Error("useButtonContext must be used within a ButtonProvider");
  }
  return context
}