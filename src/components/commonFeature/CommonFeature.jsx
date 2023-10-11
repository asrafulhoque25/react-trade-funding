import React from 'react';
import featuredImg1 from '/assets/img/featuredImg1.png';

import './commonFeature.css';

const CommonFeature = ({ SectionHeader }) => {

  const CommonFeature = [
    {

    },
  ]

  return (
    <section className='CommonFeature section-padding'>
      <div className="container">
        {SectionHeader}


        <div className="featured-wrapper lg:grid lg:grid-cols-2 gap-4 items-center pb-[120px]">
          <div className="featured-img">
            <img src={featuredImg1} alt="featured image" />
          </div>
          <div className="featured-info">
            <span className='featured-count'></span>
            <h3 className='featured-title text-[48px] text-dark-dark-1 font-normal mb-3'>
              Understand business profile
            </h3>
            <p className='featured-intro text-dark-dark-3 text-[24px] font-light'>
              We invest time into understanding your business. Including your immediate requirements, goals, structure and the financial service products you use
              to run your business.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CommonFeature;