import Button from '@/components/button/Button';
import Card from '@/components/card/Card';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { ButtonIcon } from '@/components/button/Button';
import Title from '@/components/title/Title';

const CheckTable = () => {
  const tableDataCheck = [
    {
      name: ['Horizon UI PRO', false],
      quantity: 2458,
      date: '12 Jan 2021',
      progress: 17.5,
    },
    {
      name: ['Horizon UI Free', true],
      quantity: 1485,
      date: '21 Feb 2021',
      progress: 10.8,
    },
    {
      name: ['Weekly Update', true],
      quantity: 1024,
      date: '13 Mar 2021',
      progress: 21.3,
    },
    {
      name: ['Venus 3D Asset', true],
      quantity: 858,
      date: '24 Jan 2021',
      progress: 31.5,
    },
    {
      name: ['Marketplace', false],
      quantity: 258,
      date: '24 Oct 2022',
      progress: 12.2,
    },
  ];

  return (
    <Card>
      <Title title='CheckTable' />
      <main className='pt-5'>
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
            {tableDataCheck.map((item, index) => (
              <tr key={index}>
                <th className='py-3'>{item.name[0]}</th>
                <td>17.5%</td>
                <td>2458</td>
                <td>12 Jan 2024</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Card>
  );
};

export default CheckTable;
