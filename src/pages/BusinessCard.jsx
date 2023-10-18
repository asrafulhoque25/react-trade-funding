import React from 'react';
import { useLocation } from 'react-router-dom';
import { businessCardFeatureData } from '../Data';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Blogs from '../components/blogs/Blogs';
import Brand from '../components/brand/Brand';
import CommonFeature from '../components/commonFeature/CommonFeature';
import EasyApply from '../components/easyApply/EasyApply';
import PaymentTerms from '../components/paymentTerms/PaymentTerms';
import SubBanner from '../components/subBanner/SubBanner';
import bannerImg from '/assets/img/bannerCardImg.png';

const BusinessCard = () => {

  const location = useLocation();

  const routeName = location.pathname.substring(1)

  const bannerDesc = (
    <span>
      Finally a card that places you in control of your cash flow and doesn’t tie you down in fees and charges for the rest of time.
    </span>
  );


  return (
    <div>
      <SubBanner
        addRowClass={'pt-[130px] pb-[130px]'}
        title=" Complete cash flow flexibility "
        bannerDesc={bannerDesc}
        bannerImg={bannerImg}
      />
      <Breadcrumb routeName={routeName} />
      <PaymentTerms />
      <CommonFeature featureData={businessCardFeatureData} sectionCls="featured-wrapper" isCount={true} isSecHeader={false} />
      <EasyApply />
      <Blogs />
      <Brand />
    </div>
  );
};

export default BusinessCard;