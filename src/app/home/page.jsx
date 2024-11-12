import Card from '@/components/card/Card';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import React from 'react';
import { BsBarChartFill } from 'react-icons/bs';
import MiniState from './components/miniState';
import MiniStateGrid from './components/MiniStateGrid';

const HomePage = () => {
  return (
    <div
      id='wrap'
      className='bg-gray-300'
    >
      <Header />
      {/* ministate */}
      <main className='inner'>
        <MiniStateGrid />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
