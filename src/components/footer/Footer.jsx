import React from 'react';

import Call from '/assets/img/call.svg';
import Email from '/assets/img/email.svg';
import FooterBg from '/assets/img/footer-bg.jpg';
import Location from '/assets/img/location.svg';

const Footer = () => {
  return (
    <footer className='footer' style={{ backgroundImage: `url(${FooterBg})`, backgroundSize: 'cover' }}>
      <div className="container">
        <div className="footer-widget-area sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pt-[120px] pb-[60px]">
          <div className="footer-widget mb-8 lg:mb-0">
            <h4 className="widget-title text-white text-[20px] font-bold border-b border-primary-white pb-4 mb-8">
              Navigation
            </h4>
            <ul className='mb-0'>
              <li className='mb-4'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main'>Home</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main'>About</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main'>Partners</a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main'>Blog</a>
              </li>
              <li className='mb-0'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main'>Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-widget mb-8 lg:mb-0">
            <h4 className="widget-title text-white text-[20px] font-bold border-b border-primary-white pb-4 mb-8">
              Contact
            </h4>
            <ul className='mb-0'>
              <li className='mb-6'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main flex gap-4 items-start'>
                  <img src={Email} alt="icon" />
                  support@tradefunding.au
                </a>
              </li>
              <li className='mb-6'>
                <a href="tell:1300 161 641" className='text-base font-medium text-white transition-all hover:text-primary-main flex gap-4 items-start'>
                  <img src={Call} alt="icon" />
                  1300 161 641
                </a>
              </li>
              <li className='mb-0'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main flex gap-4 items-start'>
                  <img src={Location} alt="icon" />
                  Level 18 / 233 Castlereagh St, Sydney, NSW 2000.
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget mb-8 lg:mb-0">
            <h4 className="widget-title text-white text-[20px] font-bold border-b border-primary-white pb-4 mb-8">
              Products
            </h4>
            <ul className='mb-0'>
              <li className='mb-4'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main'>
                  Business Loans
                </a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main'>
                  Equipment purchase
                </a>
              </li>
              <li className='mb-4'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main'>
                  Vehicle purchase
                </a>
              </li>
              <li className='mb-0'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main'>
                  Increased sales
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-widget mb-8 lg:mb-0">
            <h4 className="widget-title text-white text-[20px] font-bold border-b border-primary-white pb-4 mb-8">
              Important
            </h4>
            <ul className='mb-0'>
              <li className='mb-4'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main'>
                  Privacy Policy
                </a>
              </li>
              <li className='mb-0'>
                <a href="#" className='text-base font-medium text-white transition-all hover:text-primary-main'>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright pb-6">
          <p className='text-primary-white text-[14px] font-normal'>
            Copyright © 2023 Trade Funding Pty Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;