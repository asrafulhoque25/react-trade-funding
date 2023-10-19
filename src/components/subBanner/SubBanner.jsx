/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../buttons/Button';
import contactFromBg from '/assets/img/contactFromBg.png';


import './subBanner.css';


const SubBanner = ({ title, bannerDesc, bannerImg, addRowClass, isContact, isContactForm }) => {
  return (
    <div className=''>
      <div className="subBanner">
        <div className="container">
          <div className={` ${addRowClass} flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 items-center pt-[120px] pb-[80px] lg:pb-[120px]`}>
            <div className='bannerContent'>
              <h1 className='text-[32px] md:text-[42px] lg:text-[56px] text-dark-dark-1 font-normal leading-[1.25] mb-6'>
                {title}
              </h1>
              <p className='text-dark-dark-2 text-[20px]  mb-10'>
                {bannerDesc}
              </p>
              {!isContact && <Button />}

            </div>
            {!isContactForm && <div className='bannerImage pb-6 lg:pb-0 lg:ms-auto'>
              <img className='max-w-100 h-auto' src={bannerImg} alt="banner img" />
            </div>}

            {/* style={{ backgroundImage: `url(${FooterBg})`, backgroundSize: 'cover' }} */}
            {isContactForm &&
              <div className="contact-wrapper p-4 lg:p-10" style={{ backgroundImage: `url(${contactFromBg})`, backgroundSize: 'cover' }}>
                <div className='contactForm bg-white p-6 radius-lg max-w-[582px] m-auto'>
                  <div className="form-heading mb-6">
                    <h3 className='text-dark-dark-1 text-[25px] lg:text-[32px] font-normal'>Get a quote</h3>
                    <p className='text-dark-dark-3 text-base font-light'>
                      Dont like Filling up forms ? Mail us on <a href="mailto:support@tradefunding.au" className='text-primary-main'>support@tradefunding.au</a>
                    </p>
                  </div>
                  <form>
                    <div className="form-group grid md:grid-cols-2 gap-4 mb-6">
                      <input type="text" name='' placeholder='Enter' className='form-field border border-dark-dark-4 p-3' />
                      <input type="Email" name='' placeholder='Email' className='form-field border border-dark-dark-4 p-3' />
                    </div>
                    <div className="form-group grid md:grid-cols-2 gap-4 mb-6">
                      <input type="number" name='' placeholder='Phone' className='form-field border border-dark-dark-4 p-3' />
                      <select name="Country" className='form-field text-dark-dark-4 border border-dark-dark-4 p-3'>
                        <option value="BD">BD</option>
                        <option value="India">India</option>
                        <option value="UK">Uk</option>
                        <option value="USA">USA</option>
                      </select>
                    </div>
                    <div className="form-group mb-6">
                      <textarea type="text" name='' placeholder='Message' className='form-field border border-dark-dark-4 p-3 w-full' />
                    </div>

                    <div className="btn-wrap text-center mt-4">
                      <button type='submit' className='w-full inline-flex gap-2 items-center justify-center bg-primary-main font-bold text-white transition-all py-[16px] px-[40px] hover:bg-secondary-main'>
                        Send
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                          <path d="M20.3672 11.4328L11.5125 3.74766C11.4445 3.68906 11.3578 3.65625 11.2664 3.65625H9.19219C9.01875 3.65625 8.93906 3.87187 9.07031 3.98438L17.2781 11.1094H3.5625C3.45937 11.1094 3.375 11.1937 3.375 11.2969V12.7031C3.375 12.8062 3.45937 12.8906 3.5625 12.8906H17.2758L9.06797 20.0156C8.93672 20.1305 9.01641 20.3438 9.18984 20.3438H11.3344C11.3789 20.3438 11.4234 20.3273 11.4562 20.2969L20.3672 12.5672C20.4483 12.4966 20.5134 12.4095 20.558 12.3116C20.6025 12.2138 20.6256 12.1075 20.6256 12C20.6256 11.8925 20.6025 11.7862 20.558 11.6884C20.5134 11.5905 20.4483 11.5034 20.3672 11.4328Z" fill="white" />
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubBanner