import React from 'react';

const CommonHeader = ({ SectionTitle, SectionIntro, addClass, secTitleColor, addIntroClass }) => {
  return (
    <div className={`sectionHeader text-center max-w-[950px] m-auto pb-10 ${addClass}`}>
      <h2 className={`secTitle text-dark-dark-1 text-[48px] font-normal mb-2 ${secTitleColor}`}>
        {SectionTitle}
      </h2>
      <p className={`secIntro text-dark-dark-3 text-[24px] font-light ${addIntroClass}`}>
        {SectionIntro}
      </p>
    </div>
  );
};

export default CommonHeader;