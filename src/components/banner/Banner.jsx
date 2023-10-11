import React from 'react';

import Button from '../buttons/Button';
import CheckList from './CheckList';
import BannerImg from '/assets/img/home-banner-img.jpg';

const Banner = () => {
  return (
    <section className='main-banner'>
      <div className="container m-auto">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 items-center pt-[170px]">
          <div className='bannerContent'>
            <h1 className='text-[36px] md:text-[46px] lg:text-[56px] text-dark-dark-1 font-normal leading-[1.25] mb-6'>
              Unlock cash flow & improve how your business transacts.
              </h1>
            <p className='text-dark-dark-2 text-[20px] font-bold mb-6'>
              The preferred partner to businesses who want to Grow and Save
              </p>
              <CheckList  />
              <Button />
          </div>
          <div className='bannerImage pb-6 lg:pb-0 lg:ms-auto'>
            <img className='max-w-100 h-auto' src={BannerImg} alt="banner img" />
          </div>
        </div>

        <div className="ourAchieved">
          <div className="achieved">
            <h5 className='text-dark-dark-1 text-[24px] font-normal'>98K+</h5>
            <p className='text-dark-dark-3 text-[14px] font-normal'>Businesses network</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;