import React from 'react'
import videoCard1 from '/assets/img/videoCard1.png'
import videoCard2 from '/assets/img/videoCard2.png'
import playBtn from '/assets/img/playBtn.svg'
import './GreatCustomer.css'
const GreatCustomers = () => {
  return (
    <div className='greatCustomers bg-primary-main-light section-padding'>
        <div className="container">
            <div className="greatCustomers-wrap grid grid-cols-3 gap-12">
                <div className="great-customer-item ">
                    <h2 className='text-dark-dark-1 text-[48px]'>Validated by great customers and their businesses</h2>
                    <p className='text-[24px] text-dark-dark-3'>How they have benefited by choosing Trade Funding as their preferred financial services partner.</p>
                </div>
                <div className="video-card bg-white px-[3px] pt-[3px]">
                   <div className='video-wrap inline-block relative'>
                   <img src={videoCard1} alt="" />
                    <div className='playBtn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                        <img src={playBtn} alt="" />
                    </div>
                   </div>
                    <div className="videoCardContent px-7 py-7">
                        <h2 className='text-dark-dark-1 text-2xl font-bold '>AMR Hair & Beauty</h2>
                        <p className='text-dark-dark-3 text-xl mt-[20px]'>Australia's favourite supplier of beauty and hairdressing products. Shop premium haircare, skincare, makeup and more.</p>
                    </div>
                </div>
                <div className="video-card bg-white px-[3px] pt-[3px]">
                   <div className='video-wrap inline-block relative'>
                   <img src={videoCard2} alt="" />
                    <div className='playBtn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
                        <img src={playBtn} alt="" />
                    </div>
                   </div>
                    <div className="videoCardContent px-7 py-7">
                        <h2 className='text-dark-dark-1 text-2xl font-bold '>AMR Hair & Beauty</h2>
                        <p className='text-dark-dark-3 text-xl mt-[20px]'>Australia's favourite supplier of beauty and hairdressing products. Shop premium haircare, skincare, makeup and more.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GreatCustomers