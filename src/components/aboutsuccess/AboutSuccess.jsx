import React from 'react'
import teamSuccess from '/assets/img/team-success.png'
const AboutSuccess = () => {
  return (
    <div className='success section-padding bg-primary-main-light'>
        <div className="container">
            <div className="grid grid-cols-12 gap-16 items-center">
                <div className=' col-span-5'>
                    <img src={teamSuccess} alt="" />
                </div>
                <div className=' col-span-7'>
                    <h3 className=' text-dark-dark-1 text-[48px] mb-6 mt-0'>A team dedicated to see you succeed!</h3>
                    <p className='text-dark-dark-2 text-[24px] font-light mb-8'>Our team at Trade Funding are passionate about small and medium sized businesses. We understand and appreciate the effort it takes, sacrifices made and glory of breaking through barriers, when starting, building and running a business. <span className='font-bold' >“Its not Easy!</span>”</p>
                    <p className='text-dark-dark-2 text-[24px] font-light mb-8'>In today's world Technology is having a growing impact on the financial service products available to businesses, challenging the status-quo and providing new and innovative ways to access capital, process payments and much more. Yet small business owners are still faced with cash flow challenges and at times unaware of the options available to them.</p>
                    <p className='text-dark-dark-2 text-[24px] font-light mb-8'>We exist to simplify financial services for Australian SME businesses. At Trade Funding, we bring lending products and payment solutions together in one place, tailored to each business's unique needs. We help businesses access the right products for growth and identify cost-saving opportunities in their payment processes. By providing expertise, guidance, and a centralised platform, we empower SMEs to make informed financial decisions, save money, and thrive.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutSuccess