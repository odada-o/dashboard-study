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
        <Button />

        <MiniStateGrid stateData={stateData} />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
