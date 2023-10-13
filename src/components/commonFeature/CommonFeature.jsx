/* eslint-disable react/prop-types */
import React from 'react';


import CommonHeader from '../commonHeader/CommonHeader';
import LearnMore from '../learnMoreBtn/LearnMore';
import './commonFeature.css';

const CommonFeature = ({ featureData, sectionCls, isCount, isSecHeader }) => {

  return (
    <section className='CommonFeature section-padding'>
      <div className="container">
        {isSecHeader && <CommonHeader 
          SectionTitle='Our Values'
          addClass={""}
          SectionIntro={"Duis aute irure dolor in reprehenderit voluptate esse."}
        />}
        <div className="common-feature-wrapper">
          {
            featureData?.map((data, index) =>

              <div key={index} className={` ${sectionCls} lg:flex gap-14 items-center pb-[120px]`}>
                <div className="featured-img w-full">
                  <img src={data.FeatureImg} alt="featured image" />
                </div>
                <div className="featured-info w-full">
                  {!isCount && <span className='featured-count'></span>}
                  <h3 className='featured-title text-[48px] text-dark-dark-1 font-normal mb-3'>
                    {data.featuredTitle}
                  </h3>
                  <p className='featured-intro text-dark-dark-3 text-[24px] font-light'>
                    {data.featuredIntro}
                  </p>

                  <div className='featured-btn mt-10 text-dark-dark-3 text-[24px] font-light'>
                    {data.btn}
                  </div>
                </div>
              </div>

            )
          }
        </div>
        {isCount && <div className="flex justify-center">
          <LearnMore btnText="Learn More" />
        </div>}
      </div>
    </section>
  );
};

export default CommonFeature;