/* eslint-disable react/prop-types */
import React from 'react';

import Button from '../buttons/Button';
import CheckList from './CheckList';

const Banner = ({ BusinessLoans, BannerTitle, BannerIntro, BannerIntro2, BannerImage }) => {

  const AchievedData = [
    {
      id: 1,
      achieved: "98K+",
      network: "Businesses network"
    },
    {
      id: 2,
      achieved: "5 star",
      network: "Google rating"
    },
    {
      id: 3,
      achieved: "40+",
      network: "Lenders and providers"
    },
    {
      id: 4,
      achieved: "160+ countries",
      network: "Facilitating transactions across"
    },
    {
      id: 5,
      achieved: "USD 1.1 Billion",
      network: "Loans delivered to SMEs"
    },
  ]

  return (
    <section className='main-banner'>
      <div className="container m-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 items-center pt-[120px] pb-[120px]">
          <div className='bannerContent'>
            <h1 className='text-[32px] md:text-[42px] lg:text-[56px] text-dark-dark-1 font-normal leading-[1.25] mb-6'>
              {BannerTitle}
            </h1>
            <p className='text-dark-dark-2 text-[20px] font-bold mb-6'>
              {BannerIntro}
            </p>
            <p className='text-dark-dark-2 text-[20px] font-light italic mb-6'>
              {BannerIntro2}
            </p>
            <CheckList />
            <Button />
          </div>
          <div className='bannerImage pb-6 lg:pb-0 lg:ms-auto'>
            <img className='max-w-100 h-auto' src={BannerImage} alt="banner img" />
          </div>
        </div>

        {!BusinessLoans &&
          <div className="ourAchieved flex lg:justify-between flex-wrap gap-6 pb-10">
            {
              AchievedData.map((data, id) =>
                <div key={id} className="achieved border-l-2 border-dark-dark-6 ps-4">
                  <h5 className='text-dark-dark-1 text-[24px] font-normal'>
                    {data.achieved}
                  </h5>
                  <p className='text-dark-dark-3 text-[14px] font-normal'>
                    {data.network}
                  </p>
                </div>
              )
            }
          </div>
        }
      </div>
    </section>
  );
};

export default Banner;