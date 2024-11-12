import Card from '@/components/card/Card';
import Image from 'next/image';
import React from 'react';
import { BsBarChartFill } from 'react-icons/bs';

const MiniState = () => {
  return (
    <Card>
      <div className='flex items-center gap-5'>
        {/* 앞쪽 아이콘 */}
        <div className='w-14 h-14 bg-primary-10 rounded-full flex justify-center items-center text-primary'>
          <BsBarChartFill />
        </div>
        {/* 텍스트 */}
        <div>
          <span className='text-primary-60 text-sm'>Earnings</span>
          <strong className='block text-lg'>$350.4</strong>
          <div className='flex gap-2'>
            <span className='text-secondary text-sm'>+24.5%</span>
            <span className='text-gray-500 text-sm'>Since last month</span>
          </div>
        </div>
        {/* 국기 이미지 */}
        <div className='rounded-full ml-auto w-[50px] h-[50px]'>
          <Image
            src='/images/usa.png'
            alt='USA'
            width={50}
            height={50}
          />
        </div>
      </div>
    </Card>
  );
};

export default MiniState;
