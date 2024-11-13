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
      <main className='inner flex flex-col gap-10'>
        <div className='flex flex-col lg:flex-row gap-4'>
          <div className='bg-red-100 grow'>d</div>
          <div className='grow flex flex-col gap-4'>
            <div className='bg-green-100 grow'>g</div>
            <div className='bg-green-100 grow'>g</div>
          </div>
        </div>

        <div>
          <Button>확인</Button>
          <Button gray>취소</Button>
        </div>

        <MiniStateGrid stateData={stateData} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
