'use client';

import React from 'react';

const EventPage = () => {
  return (
    <div>
      {/* 폼 이벤트 */}
      <form>
        {/* 입력 변경 */}
        <input
          className='bg-gray-300'
          type='text'
          onChange={e => {
            console.log('값 변경', e.target.value);
          }}
          onFocus={e => console.log('포커스!')}
        />

        <input
          type='checkbox'
          onChange={e => {
            console.log('체크', e.target.checked);
          }}
        />
      </form>
      <h2>마우스 이벤트</h2>

      {/* 클릭 이벤트 */}
      <button
        onClick={() => {
          console.log('클릭');
        }}
        onDoubleClick={() => {
          console.log('더블클릭');
        }}
      >
        클릭 이벤트
      </button>

      <div
        onMouseEnter={() => {
          console.log('마우스 오버');
        }}
        onMouseLeave={e => console.log('마우스 나감')}
        className='w-40 h-40 bg-primary-10'
      >
        마우스 오버/아웃
      </div>

      <div
        onMouseMove={e => {
          console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
        }}
        className='w-40 h-40 bg-primary-10'
      >
        마우스를 움직여보세요
      </div>
    </div>
  );
};

export default EventPage;
