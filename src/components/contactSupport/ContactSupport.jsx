import React from 'react';

import CallIcon from '/assets/img/call2.svg';
import Email from '/assets/img/email2.svg';

const ContactSupport = () => {
  return (
    <section className='ContactSupport section-padding bg-primary-main-light'>
      <div className="container">
        <div className="supportWrapper grid grid-cols-3 gap-6">
          <div className="supportItems bg-white rounded-xl p-6 box-shadow">
            <div className="icon mb-6">
              <img src={CallIcon} alt="icon" />
            </div>
            <h3 className='text-dark-dark-1 text-[24px] font-bold'>
              1300 161 641
            </h3>
          </div>
          <div className="supportItems bg-white rounded-xl p-6 box-shadow">
            <div className="icon mb-6">
              <img src={Email} alt="icon" />
            </div>
            <h3>
              <a className='text-dark-dark-1 text-[24px] font-bold' href="mailto:support@tradefunding.au">
                support@tradefunding.au
              </a>
            </h3>
          </div>
          <div className="supportItems bg-white rounded-xl p-6 box-shadow">
            <div className="icon mb-6">
              <img src={CallIcon} alt="icon" />
            </div>
            <h3 className='text-dark-dark-1 text-[24px] font-bold'>
              Level 18 / 233 Castlereagh St, Sydney, NSW 2000.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSupport;