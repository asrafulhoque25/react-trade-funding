import React from 'react';
import { useLocation } from 'react-router-dom';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Banner from '../components/banner/Banner';

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
      <Banner BusinessLoans={true} />
      <Breadcrumb routeName={routeName} />
    </div>
  );
};

export default BusinessLoans;