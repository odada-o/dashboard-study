'use client';

import React from 'react';
import styled from 'styled-components';

const Button = ({ children, gray }) => {
  return <ButtonStyled className={` text-white px-5 py-1 rounded hover:bg-secondary ${gray ? 'bg-gray-500' : 'bg-primary'}`}>{children}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  &::before {
    content: '🚀 ';
  }
`;

export default Button;
