import React from 'react'
import Button from '../buttons/Button'
import BannerImg from '/assets/img/home-banner-img.jpg';
const SubBanner = ({title, bannerDesc,bannerImg}) => {
  return (
    <div className=''>
      <div className="subBanner">
        <div className="container">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 items-center pt-[170px] pb-[120px]">
          <div className='bannerContent'>
            <h1 className='text-[36px] md:text-[46px] lg:text-[56px] text-dark-dark-1 font-normal leading-[1.25] mb-6'>
              {title}
              </h1>
            <p className='text-dark-dark-2 text-[20px]  mb-6'>
              {bannerDesc}
              </p>
              <Button />
          </div>
          <div className='bannerImage pb-6 lg:pb-0 lg:ms-auto'>
            <img className='max-w-100 h-auto' src={bannerImg} alt="banner img" />
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default SubBanner