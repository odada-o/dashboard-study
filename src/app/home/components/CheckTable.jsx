import Button from '@/components/button/Button';
import Card from '@/components/card/Card';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { ButtonIcon } from '@/components/button/Button';
import Title from '@/components/title/Title';

const CheckTable = () => {
  return (
    <Card>
      <Title title='CheckTable' />
      <main>
        <table className='w-full text-left'>
          <thead className='border-b border-b-gray-300 bg-gray-100 text-sm text-gray-500 font-medium'>
            <tr>
              <th className='py-3'>name</th>
              <th>progress</th>
              <th>quantity</th>
              <th>date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className='py-3'>Horizon UI PRO</th>
              <td>17.5%</td>
              <td>2458</td>
              <td>12 Jan 2024</td>
            </tr>
          </tbody>
        </table>
      </main>
    </Card>
  );
};

export default CheckTable;
