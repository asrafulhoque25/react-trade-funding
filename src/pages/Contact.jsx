import React from 'react';
import { useLocation } from 'react-router';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import Navbar from '../components/Navbar/Navbar';
import Blogs from '../components/blogs/Blogs';
import CommonHeader from '../components/commonHeader/CommonHeader';
import ContactSupport from '../components/contactSupport/ContactSupport';
import GoogleMap from '../components/googleMap/GoogleMap';
import SubBanner from '../components/subBanner/SubBanner';
import aboutBanner from '/assets/img/partner-banner-img.png';

const Contact = () => {

  const location = useLocation();

  const routeName = location.pathname.substring(1)

  const bannerDesc = (
    <span>
      Contrairement à une opinion répandue, le Lorem Ipsum nest pas simplement du texte aléatoire.
    </span>
  );

  return (
    <div>

      <Navbar />
      <SubBanner isContact={true}
        addRowClass={'pt-[100px] pb-[100px]'}
        title="Contact us"
        bannerDesc={bannerDesc}
        bannerImg={aboutBanner}
        isContactForm={true}
      />
      <Breadcrumb routeName={routeName} />
      <ContactSupport />
      <GoogleMap />
      <Blogs SectionHeader={
        <CommonHeader
          SectionTitle="Let us help you take your business to the next level!"
        />
      } />
    </div>
  );
};

export default Contact;