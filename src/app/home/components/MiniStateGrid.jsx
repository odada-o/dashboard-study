import React from 'react';
import MiniState from './MiniState';

const MiniStateGrid = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-3'>
      <MiniState
        name='Earnings'
        value='$350.4'
      />
      <MiniState
        name='Spend this month'
        value='$642.39'
      />
      <MiniState
        name='Sales'
        value='$574.34'
      />
      <MiniState
        name='Your balance'
        value='$1,000'
      />
      <MiniState
        name='New Tasks'
        value='154'
      />
      <MiniState
        name='Total Projects'
        value='2935'
      />
    </div>
  );
};

export default MiniStateGrid;
