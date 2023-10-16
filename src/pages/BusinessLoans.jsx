import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Banner from '../components/banner/Banner';
import BringingExperience from '../components/bringingExperience/BringingExperience';
import GrowSave from '../components/growandsave/GrowSave';
import BannerImg from '/assets/img/bl-banner-img.png';

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
      <Banner
        BannerTitle={"Let's put the CASH back in your Cash flow!"}
        BannerIntro={"Our diversified panel of lenders and products delivers the highest success rate for securing the funding your business needs."}
        BannerImage={BannerImg}
        BusinessLoans={true}
      />
      <Breadcrumb routeName={routeName} />
      <BringingExperience />
      <GrowSave />
    </div>
  );
};

export default BusinessLoans;