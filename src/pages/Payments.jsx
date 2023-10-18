/* eslint-disable react/prop-types */
import React from 'react';
import { useLocation } from 'react-router-dom';
import { businessLoans, partnerPaymentData } from '../Data';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Banner from '../components/banner/Banner';
import Blogs from '../components/blogs/Blogs';
import Brand from '../components/brand/Brand';
import BringingExperience from '../components/bringingExperience/BringingExperience';
import CommonFeature from '../components/commonFeature/CommonFeature';
import GreatCustomers from '../components/greatCustomers/GreatCustomers';
import GrowSave from '../components/growandsave/GrowSave';
import BannerImg from '/assets/img/payment-banner-img.png';

const Payments = () => {

  const location = useLocation();

  const routeName = location.pathname.substring(1)


  return (
    <div>
      <Banner
        BannerTitle={"Let's put the FLOW back in your cash flow!"}
        BannerIntro={"Access the best payment products to get paid and pay in real time at market leading rates!"}
        BannerIntro2={"Did you know that if you are using a standard debit card for foreign transactions you could be paying up to 8x more in fees…"}
        BannerImage={BannerImg}
        BusinessLoans={true}
      />
      <Breadcrumb routeName={routeName} />
      <Brand
        brandData={partnerPaymentData}
        isPayments={false}
        containerClass={'container'}
        rowClass={'gap-6 justify-center '}
        itemClass={'logo-circle bg-white max-w-[250px] h-[200px] cursor-pointer xl:max-w-[260px] w-full h-[260px] xl:max-h-[260px] rounded-full transition-all hover:bg-ascent-3 '}
      />
      <BringingExperience secBgColor={'bgOffWhite'} />
      <GrowSave
        bgColor={'growSaveBusinessLoansBg'}
        addClass={'text-start'}
        iconClass={'text-start'}
        secTitle={"What best describes you"}
      />
      <CommonFeature featureData={businessLoans} isCount={true} sectionCls="featured-wrapper" fontBold={true} isBusinessFeature={true} />
      <GreatCustomers />
      <Blogs />
    </div>
  );
};

export default Payments;