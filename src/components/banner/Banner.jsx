import React from 'react';

import CheckList from './CheckList';
import BannerImg from '/assets/img/home-banner-img.jpg';

const Banner = () => {
  return (
    <section className='main-banner'>
      <div className="container m-auto">
        <div className="grid grid-cols-2 gap-4">
          <div className='bannerContent'>
              <h1>
              Unlock cash flow & improve how your business transacts.
              </h1>
              <p>
              The preferred partner to businesses who want to Grow and Save
              </p>
              <CheckList  />
          </div>
          <div className='bannerImage'>
            <img src={BannerImg} alt="banner img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;