import React from 'react';
import CommonHeader from '../commonHeader/CommonHeader';
import termsImage from '/assets/img/termsImg.png';

const PaymentTerms = () => {
  return (
    <section className='PaymentTerms section-padding bg-primary-main-light'>
      <div className="container">
        <CommonHeader
          SectionTitle={" Pay for your most important business purchases on longer, more flexible payment terms. "}
          SectionIntro={" Features that every business owner wants and needs. "}
        />

        <div className="payment-terms-wrapper grid lg:grid-cols-2 gap-10 items-center mb-10">
          <div className="payment-terms-left grid sm:grid-cols-2 gap-6">
            <div className="businessLoanFeatureItem">
              <h3 className="text-primary-main text-base font-bold mb-[10px]">
                Amount
              </h3>
              <p className=" text-dark-dark-2 text-base">
                Limits up to $100,000.
              </p>
            </div>
            <div className="businessLoanFeatureItem">
              <h3 className="text-primary-main text-base font-bold mb-[10px]">
                Interest free
              </h3>
              <p className=" text-dark-dark-2 text-base">
                Up to 44 days interest-free on all purchases.
              </p>
            </div>
            <div className="businessLoanFeatureItem">
              <h3 className="text-primary-main text-base font-bold mb-[10px]">
                No annual fee
              </h3>
              <p className=" text-dark-dark-2 text-base">
                No annual fee, no subscription cost.
              </p>
            </div>
            <div className="businessLoanFeatureItem">
              <h3 className="text-primary-main text-base font-bold mb-[10px]">
                Cashflow friendly
              </h3>
              <p className=" text-dark-dark-2 text-base">
                Pay invoices and split bills up over a 3- or 6-month installment plan.
              </p>
            </div>
            <div className="businessLoanFeatureItem">
              <h3 className="text-primary-main text-base font-bold mb-[10px]">
                Flexible
              </h3>
              <p className=" text-dark-dark-2 text-base">
                Choose your own repayment terms, weekly, fortnight or monthly.
              </p>
            </div>
            <div className="businessLoanFeatureItem">
              <h3 className="text-primary-main text-base font-bold mb-[10px]">
                No collateral
              </h3>
              <p className=" text-dark-dark-2 text-base">
                No personal asset security required.
              </p>
            </div>
          </div>
          <div className="payment-terms-image lg:ml-auto">
            <img src={termsImage} alt="terms Image" />
          </div>
        </div>

        <div className="terms-bottom text-center">
          <p className='secIntro text-dark-dark-3 text-[24px] font-light mb-6'>
            Standard terms and conditions apply. Subject to credit approval.
          </p>
          <div className='button-wrap'>
            <a href="#" className='inline-flex gap-2 items-center justify-center bg-primary-main font-bold text-white transition-all py-[16px] px-[40px] hover:bg-secondary-main'>
              Access now
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.3672 11.4328L11.5125 3.74766C11.4445 3.68906 11.3578 3.65625 11.2664 3.65625H9.19219C9.01875 3.65625 8.93906 3.87187 9.07031 3.98438L17.2781 11.1094H3.5625C3.45937 11.1094 3.375 11.1937 3.375 11.2969V12.7031C3.375 12.8062 3.45937 12.8906 3.5625 12.8906H17.2758L9.06797 20.0156C8.93672 20.1305 9.01641 20.3438 9.18984 20.3438H11.3344C11.3789 20.3438 11.4234 20.3273 11.4562 20.2969L20.3672 12.5672C20.4483 12.4966 20.5134 12.4095 20.558 12.3116C20.6025 12.2138 20.6256 12.1075 20.6256 12C20.6256 11.8925 20.6025 11.7862 20.558 11.6884C20.5134 11.5905 20.4483 11.5034 20.3672 11.4328Z" fill="white" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentTerms;