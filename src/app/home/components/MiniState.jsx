import Card from '@/components/card/Card';
import React from 'react';
import { BsBarChartFill } from 'react-icons/bs';

const MiniState = () => {
  return (
    <Card>
      <div className='flex gap-5'>
        <div className='w-14 h-14 bg-primary-10 rounded-full flex justify-center items-center text-primary'>
          <BsBarChartFill />
        </div>
        <div>
          <span className='text-primary-60 text-sm'>Earnings</span>
          <strong className='block text-lg'>$350.4</strong>
        </div>
      </div>
    </Card>
  );
};

export default MiniState;
