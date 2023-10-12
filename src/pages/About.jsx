import React from "react";
import Navbar from "../components/Navbar/Navbar";
import SubBanner from "../components/subBanner/SubBanner";
import CommonHeader from "../components/commonHeader/CommonHeader";
import aboutBanner from '/assets/img/aboutBanner.svg'
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import AboutSuccess from "../components/aboutsuccess/AboutSuccess";
import { useLocation } from "react-router-dom";
import CommonFeature from "../components/commonFeature/CommonFeature";
import { aboutFeatureData } from "../Data";
import Video from "../components/video/Video";
import Footer from "../components/footer/Footer";

const About = () => {
 
  const location = useLocation();

 const routeName = location.pathname.substring(1)

  const bannerDesc = (
    <span>
      <strong>Founded with a clear purpose -</strong> <i>“To reduce the failure
      rate of SMEs by providing access to the best financial service products
      for each individual business”.</i>
    </span>
  );
  return (
    <div className="about">
      <Navbar />
      <SubBanner
        title="SMEs are the backbone of almost every major economy around the globe!"
        bannerDesc={bannerDesc}
        bannerImg= {aboutBanner}
         />
        <Breadcrumb routeName={routeName} />
        <AboutSuccess />
        <CommonFeature featureData ={aboutFeatureData}  sectionCls= "aboutFeatureWrapper" isCount={true}/>
        <Video />
        <Footer />
    </div>
  );
};

export default About;
