import React from 'react';
import { useLocation } from 'react-router-dom';
import SubBanner from '../components/subBanner/SubBanner';
import aboutBanner from '/assets/img/partner-banner-img.png';

const BusinessLoans = () => {

  const location = useLocation();

  const routeName = location.pathname.substring(1)

  const bannerDesc = (
    <span>
      Join a community of partners and help ambitious businesses get the next generation of finance products —from cards and loans to payments and foreign exchange accounts.
    </span>
  );

  return (
    <div>
      <SubBanner
        addRowClass={'pt-[130px] pb-[130px]'}
        title="Partner with us!"
        bannerDesc={bannerDesc}
        bannerImg={aboutBanner}
      />
    </div>
  );
};

export default BusinessLoans;