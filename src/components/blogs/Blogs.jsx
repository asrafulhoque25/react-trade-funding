/* eslint-disable react/prop-types */
import React from 'react';
import BlogImage from '/assets/img/blog-img1.png';
import BlogImage2 from '/assets/img/blog-img2.png';
import BlogImage3 from '/assets/img/blog-img3.png';
import BlogImage4 from '/assets/img/blog-img4.png';
import BlogImage5 from '/assets/img/blog-img5.png';

const Blogs = ({ SectionHeader }) => {
  return (
    <section className='blogs section-padding bg-white'>
      <div className="container">
        {SectionHeader}

        <div className="blog-wrapper lg:grid grid-cols-2 gap-6">

          {/* feature post */}
          <div className="blog-post  border-b-2 lg:border-b-0 mb-6 pb-6 lg:border-r-2 border-dark-dark-6 lg:pe-6">
            <div className="blog-img overflow-hidden mb-7">
              <a href="#">
                <img className='w-full' src={BlogImage} alt="Blog Image" />
              </a>
            </div>
            <a href='#' className='blog-categories text-primary-main font-semibold text-[12px] tracking-widest uppercase'>
              Business Loans
            </a>
            <h3 className='pt-4 pb-6'>
              <a href="#" className='text-dark-dark-1 text-[27px] lg:text-[32px] font-bold'>
                Benefits of offering trade terms to business customers: how it can help your business grow
              </a>
            </h3>
            <p className='text-[16px] lg:text-[20px] text-dark-dark-3 font-normal leading-[30px] mb-8'>
              As a business owner, you may have heard the term trade terms before. It refers to the credit that a business extends to its customers to pay for goods or services over an agreed-upon period. This can be an effective way to build long-term relationships with your customers and increase sales. In this blog, well explore why businesses should offer trade terms to their business customers and how it can benefit them.
            </p>

            <div className="read-more-btn">
              <a href="#" className='flex gap-2 items-center text-base text-dark-dark-3 font-bold'>
                Read more
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M16.9727 9.52734L9.59375 3.12305C9.53711 3.07422 9.46484 3.04688 9.38867 3.04688H7.66016C7.51563 3.04688 7.44922 3.22656 7.55859 3.32031L14.3984 9.25781H2.96875C2.88281 9.25781 2.8125 9.32812 2.8125 9.41406V10.5859C2.8125 10.6719 2.88281 10.7422 2.96875 10.7422H14.3965L7.55664 16.6797C7.44727 16.7754 7.51367 16.9531 7.6582 16.9531H9.44531C9.48242 16.9531 9.51953 16.9395 9.54688 16.9141L16.9727 10.4727C17.0403 10.4139 17.0945 10.3412 17.1316 10.2597C17.1688 10.1782 17.188 10.0896 17.188 10C17.188 9.9104 17.1688 9.82184 17.1316 9.7403C17.0945 9.65876 17.0403 9.58614 16.9727 9.52734Z" fill="#5D6878" />
                </svg>
              </a>
            </div>
          </div>
          {/* feature post */}

          <div className="blog-inner-wrapper sm:grid grid-cols-2 gap-4">

            <div className="blog-post border-b-2 border-dark-dark-6 mb-4 pb-6">
              <div className="blog-img overflow-hidden mb-4">
                <a href="#">
                  <img className='w-full' src={BlogImage2} alt="Blog Image" />
                </a>
              </div>
              <a href='#' className='blog-categories text-primary-main font-semibold text-[12px] tracking-widest uppercase'>
                Business Loans
              </a>
              <h3 className='pt-4 pb-3'>
                <a href="#" className='text-dark-dark-1 text-[20px] font-bold'>
                  How to use business credit wisely for cash flow and growth
                </a>
              </h3>
              <p className='text-[14px] text-dark-dark-3 font-normal leading-[21px] mb-4'>
                As a business owner, managing cash flow is crucial for the growth and success of your company.
              </p>

              <div className="read-more-btn">
                <a href="#" className='flex gap-2 items-center text-base text-dark-dark-3 font-bold'>
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.9727 9.52734L9.59375 3.12305C9.53711 3.07422 9.46484 3.04688 9.38867 3.04688H7.66016C7.51563 3.04688 7.44922 3.22656 7.55859 3.32031L14.3984 9.25781H2.96875C2.88281 9.25781 2.8125 9.32812 2.8125 9.41406V10.5859C2.8125 10.6719 2.88281 10.7422 2.96875 10.7422H14.3965L7.55664 16.6797C7.44727 16.7754 7.51367 16.9531 7.6582 16.9531H9.44531C9.48242 16.9531 9.51953 16.9395 9.54688 16.9141L16.9727 10.4727C17.0403 10.4139 17.0945 10.3412 17.1316 10.2597C17.1688 10.1782 17.188 10.0896 17.188 10C17.188 9.9104 17.1688 9.82184 17.1316 9.7403C17.0945 9.65876 17.0403 9.58614 16.9727 9.52734Z" fill="#5D6878" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="blog-post border-b-2 border-dark-dark-6 mb-4 pb-6">
              <div className="blog-img overflow-hidden mb-4">
                <a href="#">
                  <img className='w-full' src={BlogImage3} alt="Blog Image" />
                </a>
              </div>
              <a href='#' className='blog-categories text-primary-main font-semibold text-[12px] tracking-widest uppercase'>
                Business Loans
              </a>
              <h3 className='pt-4 pb-3'>
                <a href="#" className='text-dark-dark-1 text-[20px] font-bold'>
                  How to use business credit wisely for cash flow and growth
                </a>
              </h3>
              <p className='text-[14px] text-dark-dark-3 font-normal leading-[21px] mb-4'>
                As a business owner, managing cash flow is crucial for the growth and success of your company.
              </p>

              <div className="read-more-btn">
                <a href="#" className='flex gap-2 items-center text-base text-dark-dark-3 font-bold'>
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.9727 9.52734L9.59375 3.12305C9.53711 3.07422 9.46484 3.04688 9.38867 3.04688H7.66016C7.51563 3.04688 7.44922 3.22656 7.55859 3.32031L14.3984 9.25781H2.96875C2.88281 9.25781 2.8125 9.32812 2.8125 9.41406V10.5859C2.8125 10.6719 2.88281 10.7422 2.96875 10.7422H14.3965L7.55664 16.6797C7.44727 16.7754 7.51367 16.9531 7.6582 16.9531H9.44531C9.48242 16.9531 9.51953 16.9395 9.54688 16.9141L16.9727 10.4727C17.0403 10.4139 17.0945 10.3412 17.1316 10.2597C17.1688 10.1782 17.188 10.0896 17.188 10C17.188 9.9104 17.1688 9.82184 17.1316 9.7403C17.0945 9.65876 17.0403 9.58614 16.9727 9.52734Z" fill="#5D6878" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="blog-post border-b-2 lg:border-0 border-dark-dark-6 mb-4 pb-6">
              <div className="blog-img overflow-hidden mb-4">
                <a href="#">
                  <img className='w-full' src={BlogImage4} alt="Blog Image" />
                </a>
              </div>
              <a href='#' className='blog-categories text-primary-main font-semibold text-[12px] tracking-widest uppercase'>
                Business Loans
              </a>
              <h3 className='pt-4 pb-3'>
                <a href="#" className='text-dark-dark-1 text-[20px] font-bold'>
                  How to use business credit wisely for cash flow and growth
                </a>
              </h3>
              <p className='text-[14px] text-dark-dark-3 font-normal leading-[21px] mb-4'>
                As a business owner, managing cash flow is crucial for the growth and success of your company.
              </p>

              <div className="read-more-btn">
                <a href="#" className='flex gap-2 items-center text-base text-dark-dark-3 font-bold'>
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.9727 9.52734L9.59375 3.12305C9.53711 3.07422 9.46484 3.04688 9.38867 3.04688H7.66016C7.51563 3.04688 7.44922 3.22656 7.55859 3.32031L14.3984 9.25781H2.96875C2.88281 9.25781 2.8125 9.32812 2.8125 9.41406V10.5859C2.8125 10.6719 2.88281 10.7422 2.96875 10.7422H14.3965L7.55664 16.6797C7.44727 16.7754 7.51367 16.9531 7.6582 16.9531H9.44531C9.48242 16.9531 9.51953 16.9395 9.54688 16.9141L16.9727 10.4727C17.0403 10.4139 17.0945 10.3412 17.1316 10.2597C17.1688 10.1782 17.188 10.0896 17.188 10C17.188 9.9104 17.1688 9.82184 17.1316 9.7403C17.0945 9.65876 17.0403 9.58614 16.9727 9.52734Z" fill="#5D6878" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="blog-post border-b-2 lg:border-0 border-dark-dark-6 mb-4 pb-6">
              <div className="blog-img overflow-hidden mb-4">
                <a href="#">
                  <img className='w-full' src={BlogImage5} alt="Blog Image" />
                </a>
              </div>
              <a href='#' className='blog-categories text-primary-main font-semibold text-[12px] tracking-widest uppercase'>
                Business Loans
              </a>
              <h3 className='pt-4 pb-3'>
                <a href="#" className='text-dark-dark-1 text-[20px] font-bold'>
                  How to use business credit wisely for cash flow and growth
                </a>
              </h3>
              <p className='text-[14px] text-dark-dark-3 font-normal leading-[21px] mb-4'>
                As a business owner, managing cash flow is crucial for the growth and success of your company.
              </p>

              <div className="read-more-btn">
                <a href="#" className='flex gap-2 items-center text-base text-dark-dark-3 font-bold'>
                  Read more
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M16.9727 9.52734L9.59375 3.12305C9.53711 3.07422 9.46484 3.04688 9.38867 3.04688H7.66016C7.51563 3.04688 7.44922 3.22656 7.55859 3.32031L14.3984 9.25781H2.96875C2.88281 9.25781 2.8125 9.32812 2.8125 9.41406V10.5859C2.8125 10.6719 2.88281 10.7422 2.96875 10.7422H14.3965L7.55664 16.6797C7.44727 16.7754 7.51367 16.9531 7.6582 16.9531H9.44531C9.48242 16.9531 9.51953 16.9395 9.54688 16.9141L16.9727 10.4727C17.0403 10.4139 17.0945 10.3412 17.1316 10.2597C17.1688 10.1782 17.188 10.0896 17.188 10C17.188 9.9104 17.1688 9.82184 17.1316 9.7403C17.0945 9.65876 17.0403 9.58614 16.9727 9.52734Z" fill="#5D6878" />
                  </svg>
                </a>
              </div>
            </div>
            
          </div>
        </div>
        <div className="btn-wrap text-center mt-6">
          <a href="#" className='inline-flex gap-2 items-center justify-center bg-primary-main font-bold text-white transition-all py-[16px] px-[40px] hover:bg-secondary-main'>
            More Blog & Articles 
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M20.3672 11.4328L11.5125 3.74766C11.4445 3.68906 11.3578 3.65625 11.2664 3.65625H9.19219C9.01875 3.65625 8.93906 3.87187 9.07031 3.98438L17.2781 11.1094H3.5625C3.45937 11.1094 3.375 11.1937 3.375 11.2969V12.7031C3.375 12.8062 3.45937 12.8906 3.5625 12.8906H17.2758L9.06797 20.0156C8.93672 20.1305 9.01641 20.3438 9.18984 20.3438H11.3344C11.3789 20.3438 11.4234 20.3273 11.4562 20.2969L20.3672 12.5672C20.4483 12.4966 20.5134 12.4095 20.558 12.3116C20.6025 12.2138 20.6256 12.1075 20.6256 12C20.6256 11.8925 20.6025 11.7862 20.558 11.6884C20.5134 11.5905 20.4483 11.5034 20.3672 11.4328Z" fill="white" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blogs;