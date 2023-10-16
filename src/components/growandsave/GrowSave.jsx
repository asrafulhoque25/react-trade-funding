/* eslint-disable react/prop-types */


import { Tab } from "@headlessui/react";

import React, { useState } from "react";
import grow2 from "/assets/img/grow2.svg";
import grow3 from "/assets/img/grow3.svg";
import grow4 from "/assets/img/grow4.svg";

import backgroundImage from "/assets/img/growandsave.png";
import loan from "/assets/img/loan.svg";



function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const GrowSave = ({addClass}) => {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  const Data = {
    heading:
      'Bringing together the best products that fuel business <span style="color: #FF5E5A;"> Growth</span> and help you <span style="color: #FF5E5A;">Save</span>.',
  };

  let [categories] = useState({
    Recent: [
      {
        id: 1,
        img: loan,
        title: "Business loans",
      },
      {
        id: 2,
        img: grow2,
        title: "Equipment purchase",
      },
      {
        id: 3,
        img: grow3,
        title: "Business card",
      },
      {
        id: 4,
        img: grow4,
        title: "Invoice finance",
      },
    ],
    Popular: [
        {
            id: 1,
            img: grow4,
            title: "Invoice finance",
          },
          {
            id: 2,
            img: grow3,
            title: "Business card",
          },
          {
            id: 3,
            img: grow2,
            title: "Equipment purchase",
          },
          {
            id: 4,
            img: loan,
            title: "Business loans",
          },
    ],
  });
  return (
    <div className="growandsave section-padding" style={styles}>
      <div className="container">
        <div className="common-title mx-auto" style={{ maxWidth: "870px" }}>
          <h2
            className=" text-dark-dark-1 text-[48px]"
            dangerouslySetInnerHTML={{ __html: Data.heading }}
          />
        </div>
        <div className="">
          <Tab.Group>
            <Tab.List className="flex space-x-1 justify-center w-full mx-auto rounded-xl my-[50px] bg-white max-w-[330px]">
              {Object.keys(categories).map((category) => (
                <Tab
                  key={category}
                  className={({ selected }) =>
                    classNames(
                      "w-full py-2.5 text-sm font-medium border-0",
                      "",
                      selected
                        ? "bg-primary-main text-white shadow text-base font-bold rounded-xl border-0"
                        : "text-dark-dark-3 text-base font-bold border-0"
                    )
                  }
                >
                  {category}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-2">
              {Object.values(categories).map((posts, idx) => (
                <Tab.Panel key={idx}>
                  <div className="grid grid-cols-4 gap-[30px] justify-between align-top">
                    {posts.map((post) => (
                      <a href=""
                        className={`${addClass} relative group transition-all bg-white text-center py-[40px] px-4 rounded-s-[24px] rounded-br-[24px] shadow-black_sw` }
                        key={post.id} >
                        <div className="card-arrow absolute right-[10px] top-[10px]">
                          <svg width="20" height="20"   viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                            <path d="M4.52194 5.81165L5.64061 6.93032C5.70413 6.99385 5.79252 7.02699 5.88367 7.02147L12.3913 6.56019L4.61447 14.337C4.55371 14.3978 4.55371 14.4972 4.61447 14.558L5.44311 15.3866C5.50388 15.4474 5.60332 15.4474 5.66408 15.3866L13.4409 7.6098L12.9796 14.1174C12.9727 14.2072 13.0058 14.2956 13.0708 14.3605L14.1894 15.4791C14.2833 15.573 14.4463 15.5123 14.4546 15.3797L15.1534 5.51334C15.1598 5.42411 15.1469 5.33455 15.1156 5.25073C15.0843 5.16691 15.0354 5.09079 14.9722 5.02753C14.9089 4.96427 14.8328 4.91535 14.749 4.88408C14.6651 4.85281 14.5756 4.83992 14.4863 4.84629L4.62138 5.54649C4.48741 5.55616 4.42803 5.71774 4.52194 5.81165Z"
                              fill="#B7BCC3" className="group-hover:fill-[#0067FF]" />
                          </svg>
                        </div>
                        <img src={post.img} className="mx-auto mb-3" alt="" />
                        <h3 className="text-ascent-2 text-base font-bold group-hover:text-primary-main">
                          {post.title}
                        </h3>
                      </a>
                    ))}
                  </div>
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default GrowSave;
