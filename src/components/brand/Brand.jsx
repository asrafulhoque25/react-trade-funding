import React from 'react';

import BrandLogo1 from '/assets/img/brand-logo1.svg';
import BrandLogo2 from '/assets/img/brand-logo2.svg';
import BrandLogo3 from '/assets/img/brand-logo3.svg';
import BrandLogo4 from '/assets/img/brand-logo4.svg';
import BrandLogo5 from '/assets/img/brand-logo5.svg';
import BrandLogo6 from '/assets/img/brand-logo6.svg';

const Brand = () => {
  return (
    <section className='brand section-padding bg-primary-main-light'>
      <div className="container">
        <div className="brand-wrapper">
          <h6 className='text-center text-dark-dark-3 text-base font-bold mb-8'>
            We’ve partnered with Australias leading providers
          </h6>

          <div className="brand-logos flex justify-center lg:justify-between gap-8 flex-wrap">
            <img src={BrandLogo1} alt="brand logo" />
            <img src={BrandLogo2} alt="brand logo" />
            <img src={BrandLogo3} alt="brand logo" />
            <img src={BrandLogo4} alt="brand logo" />
            <img src={BrandLogo5} alt="brand logo" />
            <img src={BrandLogo6} alt="brand logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;