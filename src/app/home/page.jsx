import React from 'react';
import { BsBarChartFill } from 'react-icons/bs';

const HomePage = () => {
  return (
    <div>
      {/* ministate */}

      <section>
        <h2>미니 상태바</h2>
        <div>
          <ul>
            <li>
              <div className='w-14 h-14 bg-sky-100'>
                <BsBarChartFill />
              </div>
              <div>
                <span>Earnings</span>
                <strong>$350.4</strong>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
