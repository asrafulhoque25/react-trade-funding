/* eslint-disable react/prop-types */
import React from 'react';
import featuredImg1 from '/assets/img/featuredImg1.png';
import featuredImg2 from '/assets/img/featuredImg2.png';
import featuredImg3 from '/assets/img/featuredImg3.png';
import featuredImg4 from '/assets/img/featuredImg4.png';

import Button from '../buttons/Button';
import './commonFeature.css';

const CommonFeature = ({ SectionHeader }) => {

  const CommonFeatureData = [
    {
      id: 1,
      FeatureImg: featuredImg1,
      featuredTitle: " Understand business profile ",
      featuredIntro: "We invest time into understanding your business. Including your immediate requirements, goals, structure and the financial service products you useto run your business."
    },
    {
      id: 2,
      FeatureImg: featuredImg2,
      featuredTitle: "Match to the right product",
      featuredIntro: "Once we have a clear understanding of your objectives, we run a process to match you with the right products that are fit for purpose for your business."
    },
    {
      id: 3,
      FeatureImg: featuredImg3,
      featuredTitle: "Onboarding",
      featuredIntro: "We are here to keep the process simple. Whether it be helping you quickly access a new business card or setting you up with digital accounts to save costs on your payment processing, we are here to keep it simple."
    },
    {
      id: 4,
      FeatureImg: featuredImg4,
      featuredTitle: "With you on the journey! ",
      featuredIntro: "Continuous business monitoring unlike most providers who will give you a product and never speak with you again, we are with you on the journey. Continuing to explore opportunities where we can support your Growth and cut costs to Save you time and money.",
      btn: <Button />
    },
  ]

  return (
    <section className='CommonFeature section-padding'>
      <div className="container">
        {SectionHeader}

        {
          CommonFeatureData.map((data, id) => 

            <div key={id} className="featured-wrapper lg:flex gap-14 items-center pb-[120px]">
              <div className="featured-img w-full">
                <img src={data.FeatureImg} alt="featured image" />
              </div>
              <div className="featured-info w-full">
                <span className='featured-count'></span>
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
    </section>
  );
};

export default CommonFeature;