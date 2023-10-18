import React from 'react';
import { useLocation } from 'react-router';
import { partnerData1, partnerFeatureData } from '../Data';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Blogs from '../components/blogs/Blogs';
import Brand from '../components/brand/Brand';
import CommonFeature from '../components/commonFeature/CommonFeature';
import PartnershipPrograms from '../components/partnershipPrograms/PartnershipPrograms';
import SubBanner from "../components/subBanner/SubBanner";
import aboutBanner from '/assets/img/partner-banner-img.png';

const Partners = () => {

  const location = useLocation();

  const routeName = location.pathname.substring(1)

  const bannerDesc = (
    <span>
      Join a community of partners and help ambitious businesses get the next generation of finance products —from cards and loans to payments and foreign exchange accounts.
    </span>
  );


  return (

    <div className='partner'>
      <SubBanner
        addRowClass={'pt-[230px] pb-[130px]'}
        title="Partner with us!"
        bannerDesc={bannerDesc}
        bannerImg={aboutBanner}
      />
      <Breadcrumb routeName={routeName} />
      <Brand
        brandData={partnerData1}
        rowClass={'gap-6 justify-center xl:grid xl:grid-cols-6'}
        itemClass={'logo-circle bg-white max-w-[250px] h-[200px] cursor-pointer xl:max-w-[260px] w-full h-[260px] xl:max-h-[260px] rounded-full transition-all hover:bg-ascent-3 '}
      />
      <CommonFeature featureData={partnerFeatureData} sectionCls="featured-wrapper" isCount={false} isSecHeader={false} />
      <PartnershipPrograms secBgColor={'bg-primary-main-light'} />
      <Blogs />
      <Brand
        brandData={partnerData1}
        containerClass={'container'}
        rowClass={'gap-6 justify-center lg:justify-between'}
      />
    </div>

  )
}

export default Partners