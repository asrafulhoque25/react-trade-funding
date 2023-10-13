/* eslint-disable react/prop-types */
import React from 'react';

import BrandLogo1 from '/assets/img/brand-logo1.svg';
import BrandLogo2 from '/assets/img/brand-logo2.svg';
import BrandLogo3 from '/assets/img/brand-logo3.svg';
import BrandLogo4 from '/assets/img/brand-logo4.svg';
import BrandLogo5 from '/assets/img/brand-logo5.svg';
import BrandLogo6 from '/assets/img/brand-logo6.svg';

const Brand = ({ itemClass, rowClass, containerClass}) => {

  const partnerLogos = [
    {
      id: 1,
      brandLogo: BrandLogo1,
    },
    {
      id: 2,
      brandLogo: BrandLogo2,
    },
    {
      id: 3,
      brandLogo: BrandLogo3,
    },
    {
      id: 4,
      brandLogo: BrandLogo4,
    },
    {
      id: 5,
      brandLogo: BrandLogo5,
    },
    {
      id: 6,
      brandLogo: BrandLogo6,
    }
  ];

  return (
    <section className='brand section-padding bg-primary-main-light'>
      <div className={`${containerClass}`}>
        <div className="brand-wrapper">
          <h6 className='text-center text-dark-dark-3 text-base font-bold mb-10'>
            We’ve partnered with Australias leading providers
          </h6>

          <div className={`${rowClass} brand-logos flex flex-wrap`}>

            {
              partnerLogos.map((partner, id) => 
                <div key={id} className={`${itemClass} flex justify-center items-center`}>
                  <img className='w-auto max-w-min' src={partner.brandLogo} alt="brand logo" />
                </div>
              )
            }

          </div>
        </div>
      </div>
    </section>
  );
};

export default Brand;