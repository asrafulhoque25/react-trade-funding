import React from 'react';
import CommonHeader from '../commonHeader/CommonHeader';
import PPIcon1 from '/assets/img/pp-icon1.svg';
import PPIcon2 from '/assets/img/pp-icon2.svg';
import PPIcon3 from '/assets/img/pp-icon3.svg';

const PartnershipPrograms = () => {
  const partnerProgramsData = [
    {
      id: 1,
      icon: PPIcon1,
      title: "Referral Partners",
      desc: "Be rewarded with referring your SMEs customers to Trade Funding. Whether it be to increase your sales, improve your payment terms, an ancillary product offering or potential revenue share. Trade Funding’s referral program is a perfect solution for accounting firms, consultants, financial brokers and institutions, suppliers, retailers and more.",
    },
    {
      id: 2,
      icon: PPIcon2,
      title: "Product or service Partners",
      desc: "Have an awesome product and or service for SMEs? We are always on the lookout for great new products that can add value to our customers.",
    },
    {
      id: 3,
      icon: PPIcon3,
      title: "Affiliate Partners",
      desc: "Tailored to content-based affiliates with a focus on SME businesses. Trade Funding can support you with content for your audience and support with education of new products and services across financial services, including Fintech, lending and payments.",
    },
  ];


  return (
    <section className='PartnershipPrograms section-padding bg-primary-main-light'>
      <div className="container">
        <CommonHeader
          SectionTitle='Our partnership programs'
          addClass={""}
          SectionIntro={"Unlock endless possibilities for growth by partnering with Trade Funding to integrate your product or service, refer & earn, or give clients an experience you’re both going to love."}
        />


        <div className="pp-wrapper grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {
            partnerProgramsData.map((program, id) =>
              <div key={id} className="pp-program-item boxShadow-3xl bg-white p-6 rounded-xl">
                <div className="icon mb-6">
                  <img src={program.icon} alt="program image " />
                </div>
                <h3 className='text-dark-dark-1 text-[24px] font-bold mb-5'>{program.title}</h3>
                <p className='text-dark-dark-3 text-[20px] font-light leading-[30px]'>{program.desc}</p>
              </div>
            )
          }

        </div>

        <div className="btn-wrap text-center mt-12">
          <a href="#" className='inline-flex gap-2 items-center justify-center bg-primary-main font-bold text-white transition-all py-[16px] px-[40px] hover:bg-secondary-main'>
            Become a Partner Today
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.3672 11.4328L11.5125 3.74766C11.4445 3.68906 11.3578 3.65625 11.2664 3.65625H9.19219C9.01875 3.65625 8.93906 3.87187 9.07031 3.98438L17.2781 11.1094H3.5625C3.45937 11.1094 3.375 11.1937 3.375 11.2969V12.7031C3.375 12.8062 3.45937 12.8906 3.5625 12.8906H17.2758L9.06797 20.0156C8.93672 20.1305 9.01641 20.3438 9.18984 20.3438H11.3344C11.3789 20.3438 11.4234 20.3273 11.4562 20.2969L20.3672 12.5672C20.4483 12.4966 20.5134 12.4095 20.558 12.3116C20.6025 12.2138 20.6256 12.1075 20.6256 12C20.6256 11.8925 20.6025 11.7862 20.558 11.6884C20.5134 11.5905 20.4483 11.5034 20.3672 11.4328Z" fill="white" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
};

export default PartnershipPrograms;