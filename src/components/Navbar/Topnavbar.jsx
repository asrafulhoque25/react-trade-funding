import React, { useState } from "react";
import cross from "/assets/img/cross.svg";
const Topnavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div>
      {isOpen && (
        <div className="bg-ascent-3 py-2 relative">
          <div className="text-center px-6 sm:px-0 sm:flex items-center justify-center  gap-1">
            <p className="text-[10px] sm:text-sm text-dark-dark-2 font-light">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
            </p>
            <a className=" text-[10px] sm:text-sm text-dark-dark-2 font-light underline" href="" >  Read more </a>
          </div>
          <button className=" absolute right-4 top-3" onClick={handleClose}>
            <img src={cross} alt="" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Topnavbar;
