import React from 'react'
import './GreatCustomer.css'
import playBtn from '/assets/img/playBtn.svg'
import videoCard1 from '/assets/img/videoCard1.png'
import videoCard2 from '/assets/img/videoCard2.png'
const GreatCustomers = () => {
  return (
    <div className='greatCustomers bg-primary-main-light section-padding'>
        <div className="container">
              <div className="greatCustomers-wrap grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-12">
                <div className="great-customer-item ">
                      <h2 className='text-dark-dark-1 text-[30px] sm:text-[35px] lg:text-[48px] mb-4'>Validated by great customers and their businesses</h2>
                      <p className='text-[18px] lg:text-[24px] text-dark-dark-3'>How they have benefited by choosing Trade Funding as their preferred financial services partner.</p>
                </div>
                <div className="video-card bg-white px-[3px] pt-[3px]">
                   <div className='video-wrap lg:inline-block relative'>
                   <img className='w-full' src={videoCard1} alt="img" />
                    <div className='playBtn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                        <img src={playBtn} alt="icon" />
                    </div>
                   </div>
                    <div className="videoCardContent px-7 py-7">
                        <h2 className='text-dark-dark-1 text-2xl font-bold '>AMR Hair & Beauty</h2>
                        <p className='text-dark-dark-3 text-xl mt-[20px]'>Australias favourite supplier of beauty and hairdressing products. Shop premium haircare, skincare, makeup and more.</p>
                    </div>
                </div>
                <div className="video-card bg-white px-[3px] pt-[3px]">
                   <div className='video-wrap lg:inline-block relative'>
                   <img className='w-full' src={videoCard2} alt="img" />
                    <div className='playBtn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                        <img src={playBtn} alt="icon" />
                    </div>
                   </div>
                    <div className="videoCardContent px-7 py-7">
                        <h2 className='text-dark-dark-1 text-2xl font-bold '>AMR Hair & Beauty</h2>
                        <p className='text-dark-dark-3 text-xl mt-[20px]'>Australias favourite supplier of beauty and hairdressing products. Shop premium haircare, skincare, makeup and more.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GreatCustomers