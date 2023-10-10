import React from 'react';

import Button from '../buttons/Button';
import CheckList from './CheckList';
import BannerImg from '/assets/img/home-banner-img.jpg';

const Banner = () => {
  return (
    <section className='main-banner'>
      <div className="container m-auto">
        <div className="grid grid-cols-2 gap-4 items-center pt-[170px]">
          <div className='bannerContent'>
            <h1 className='text-[56px] text-dark-dark-1 font-normal leading-[66px] mb-6'>
              Unlock cash flow & improve how your business transacts.
              </h1>
            <p className='text-dark-dark-2 text-[20px] font-bold mb-6'>
              The preferred partner to businesses who want to Grow and Save
              </p>
              <CheckList  />
              <Button />
          </div>
          <div className='bannerImage ms-auto'>
            <img className='max-w-100 h-auto' src={BannerImg} alt="banner img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;