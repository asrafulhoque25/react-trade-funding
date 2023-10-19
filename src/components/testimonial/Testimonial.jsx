import React from "react";
import Button from "../buttons/Button";
import "./Testimonial.css";
import { tesData } from "./TestimonialData";
import tesBg from "/assets/img/tesBg.png";

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
            className=" text-dark-dark-1 text-[30px] sm:text-[35px] lg:text-[48px] font-normal text-center leading-[1.4]"
            dangerouslySetInnerHTML={{ __html: Data.heading }}
          />
        </div>
        <h4 className="mb-[30px] mt-[50px] text-center text-base font-bold">
          {Data.subheading}
        </h4>
        <div className="testimonial-wrap grid sm:grid-cols-2 lg:grid-cols-3 gap-[30px] sm:justify-between align-top">
          {tesData.map((data) => {
            return (
              <div
                key={data.id}
                className="testimonial-item flex flex-col justify-between relative bg-white text-start pt-[73px] pb-[30px] px-[30px] rounded-s-[24px] rounded-br-[24px] shadow-black_sw"
              >
                <div>
                  <div className="px-[30px] py-[7px] absolute top-4 left-0 tes-tag">
                    {data.tag}
                  </div>
                  <div className="star-wrap flex space-x-2 items-center">
                    <img src={data.starImg} alt="" />
                    <img src={data.starImg} alt="" />
                    <img src={data.starImg} alt="" />
                    <img src={data.starImg} alt="" />
                    <img src={data.starImg} alt="" />
                  </div>
                  <p className="mb-[30px] mt-[20px] text-dark-dark-2 text-[20px] font-light">
                    {data.desc}
                  </p>
                </div>
                <div className="flex justify-between align-top">
                  <p className="text-dark-dark-3 text-base ">{data.author}</p>
                  <img src={data.quote_img} alt="" />
                </div>
              </div>
            );
          })}
        </div>

        <div className=" mt-[50px] flex justify-center">
            <Button />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
