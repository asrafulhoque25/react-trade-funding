import React from 'react';
import FeatureImg from '/assets/img/FeatureImg1.png';

const EasyApply = () => {
  return (
    <section className='EasyApply bg-primary-main-light section-padding'>
      <div className="container">
        <div className="common-feature-wrapper">
          <div className={`lg:flex gap-14 items-center`}>
            <div className="featured-img w-full">
              <img src={FeatureImg} alt="featured image" />
            </div>
            <div className="featured-info w-full">
              <h3 className="featured-title text-[48px] text-dark-dark-1 font-normal mb-3">
                Its easy to apply
              </h3>
              <p className={`featured-intro text-dark-dark-3 font-bold text-[20px]"}`}>
                With minimum eligibility criteria, we are committed to <br className='hidden lg:inline' /> supporting Australian businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EasyApply;