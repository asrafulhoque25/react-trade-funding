import React from 'react';
import CommonHeader from '../commonHeader/CommonHeader';
import shareIcon from '/assets/img/ep-share-icon.svg';
import starIcon from '/assets/img/star-yellow.svg';

const BringingExperience = () => {
  return (
    <section className='BringingExperience section-padding bg-primary-main-light'>
      <div className="container">
        <CommonHeader
          SectionTitle={" Bringing the first class experience to business lending"}
        />

        <div className="be-wrapper grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="share-experience bg-white rounded-lg p-6 min-h-[356px] flex justify-between flex-col box-shadow">
            <div className="eps-head">
              <div className="ratting flex gap-2 items-center mb-6">
                <img src={starIcon} alt="icon" />
                <img src={starIcon} alt="icon" />
                <img src={starIcon} alt="icon" />
                <img src={starIcon} alt="icon" />
                <img src={starIcon} alt="icon" />
              </div>
              <p className='text-dark-dark-2 text-[20px] font-light'>
                Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatu
              </p>
            </div>
            <div className="author flex justify-between items-center">
              <span className='text-dark-dark-2 text-base font-normal'>
                Kelemen Krisztina
              </span>
              <img src={shareIcon} alt="icon" />
            </div>
          </div>
          <div className="share-experience bg-white rounded-lg p-6 min-h-[356px] flex justify-between flex-col box-shadow">
            <div className="eps-head">
              <div className="ratting flex gap-2 items-center mb-6">
                <img src={starIcon} alt="icon" />
                <img src={starIcon} alt="icon" />
                <img src={starIcon} alt="icon" />
                <img src={starIcon} alt="icon" />
                <img src={starIcon} alt="icon" />
              </div>
              <p className='text-dark-dark-2 text-[20px] font-light'>
                Diam quis enim lobortis scelerisque fermentum dui faucibus in ornare. Dui nunc mattis enim ut tellus elementum sagittis vitae et.
              </p>
            </div>
            <div className="author flex justify-between items-center">
              <span className='text-dark-dark-2 text-base font-normal'>
                Kovács Tímea
              </span>
              <img src={shareIcon} alt="icon" />
            </div>
          </div>
          <div className="share-experience bg-white rounded-lg p-6 min-h-[356px] flex justify-between flex-col box-shadow">
            <div className="eps-head">
              <div className="ratting flex gap-2 items-center mb-6">
                <img src={starIcon} alt="icon" />
                <img src={starIcon} alt="icon" />
                <img src={starIcon} alt="icon" />
                <img src={starIcon} alt="icon" />
                <img src={starIcon} alt="icon" />
              </div>
              <p className='text-dark-dark-2 text-[20px] font-light'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua dui nunc mattis enim
              </p>
            </div>
            <div className="author flex justify-between items-center">
              <span className='text-dark-dark-2 text-base font-normal'>
                Szekeres Dalma
              </span>
              <img src={shareIcon} alt="icon" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BringingExperience;