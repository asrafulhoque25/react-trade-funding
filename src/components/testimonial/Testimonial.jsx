import React from "react";
import tesBg from "/assets/img/tesBg.png";
import star from "/assets/img/star.svg";
import tes_data from './Testimonial_data'
const Testimonial = () => {
  const styles = {
    backgroundImage: `url(${tesBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const Data = {
    heading: 'Validated by great customers and their businesses',
      subheading:'Hear how they have benefited by choosing Trade Funding as their preferred financial services partner.',
  };
  return (
    <div className="section-padding" style={styles}>
      <div className="container">
      <div className="common-title mx-auto" style={{ maxWidth: "670px" }}>
          <h2
            className=" text-dark-dark-1 text-[48px] font-normal text-center leading-[58px]"
            dangerouslySetInnerHTML={{ __html: Data.heading }}
          />
        </div>
          <h4 className="mb-[30px] mt-[50px] text-center text-base font-bold">{Data.subheading}</h4>
          <div className="testimonial-wrap">
               <div className="testimonial-item">
                    <div className="star-wrap flex space-x-2 items-center">
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                        <img src={star} alt="" />
                    </div>
               </div>
          </div>
      </div>
    </div>
  );
};

export default Testimonial;
