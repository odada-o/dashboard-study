import Card from '@/components/card/Card';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';
import { BsBarChartFill } from 'react-icons/bs';
import MiniState from './components/miniState';

const HomePage = () => {
  return (
    <div
      id='wrap'
      className='bg-gray-300'
    >
      <Header />
      {/* ministate */}
      <main className='inner'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3'>
          <MiniState />
          <MiniState />
          <MiniState />
          <MiniState />
          <MiniState />
          <MiniState />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
