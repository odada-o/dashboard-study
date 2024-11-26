"use client"

import { useBtn } from '@/contexts/BtnContext';
import { Heart } from 'lucide-react';
import React from 'react';

const AboutPage = () => {

  const {isLiked, toggleLike} = useBtn()
  
  return (
  <div>
    <button 
      onClick={toggleLike}>
      <Heart fill={isLiked ? "red" : ""} />
    </button>
  </div>);
};

export default AboutPage;
