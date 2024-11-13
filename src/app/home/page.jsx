import React from 'react';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import MiniStateGrid from './components/MiniStateGrid';
import { stateData } from '@/data/stateData';
import Button from '@/components/button/Button';

const HomePage = () => {
  return (
    <div
      id='wrap'
      className='bg-gray-300'
    >
      <Header />
      {/* ministate */}
      <main className='inner'>
        <div className='lg:flex'>
          <div className='bg-red-100 grow'>d</div>
          <div className='bg-blue-100 grow'>d</div>
        </div>

        <Button>확인</Button>
        <Button gray>취소</Button>

        <MiniStateGrid stateData={stateData} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
