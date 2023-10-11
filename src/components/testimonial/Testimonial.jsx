import React from "react";
import tesBg from "/assets/img/tesBg.png";
import star from "/assets/img/star.svg";
import quote from "/assets/img/quote.svg";
// import tes_data from './Testimonial_data';
const Testimonial = () => {
  const styles = {
    backgroundImage: `url(${tesBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
//   const clip = {
//     clipPath: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 0 50%, 0% 0%);
//   };
  const Data = {
    heading: "Validated by great customers and their businesses",
    subheading:
      "Hear how they have benefited by choosing Trade Funding as their preferred financial services partner.",
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
        <h4 className="mb-[30px] mt-[50px] text-center text-base font-bold">
          {Data.subheading}
        </h4>
        <div className="testimonial-wrap grid grid-cols-3 gap-[30px] justify-between align-top">
          <div className="testimonial-item relative bg-white text-start pt-[73px] pb-[30px] px-[30px] rounded-s-[24px] rounded-br-[24px] shadow-black_sw">
            <div className="px-[30px] py-[7px] absolute top-4 left-0" >Business card-Growth</div>
            <div className="star-wrap flex space-x-2 items-center">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <p className="mb-[30px] mt-[20px] text-dark-dark-2 text-[20px] font-light">
              Very efficient, helpful from all staff and very supportive with
              ease of communication and access to services. Big 👍 thumbs up.
            </p>
            <div className="flex justify-between align-top">
              <p className="text-dark-dark-3 text-base ">alsdfjkasld</p>
              <img src={quote} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
