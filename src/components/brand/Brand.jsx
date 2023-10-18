/* eslint-disable react/prop-types */
import React from 'react';



const Brand = ({ itemClass, rowClass, containerClass, brandData, isPayments }) => {

  return (
    <section className='brand section-padding bg-primary-main-light'>
      <div className={`${containerClass}`}>
        <div className="brand-wrapper">

          {isPayments && <h6 className='text-center text-dark-dark-3 text-base font-bold mb-10'>
            We’ve partnered with Australias leading providers
          </h6>}

          <div className={`${rowClass} brand-logos flex xl:justify-between items-center flex-wrap justify-center`}>

            {
              brandData?.map((partner, id) => 
                <div key={id} className={`${itemClass} flex justify-center items-center`}>
                  <img className='' src={partner.brandLogo} alt="brand logo" />
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