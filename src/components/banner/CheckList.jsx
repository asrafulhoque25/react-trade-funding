import React from 'react';
import CheckIcon from '/assets/img/Check.svg';

const CheckList = () => {

  const checkListData = [
    {
      checkListText: "Financial products matched to your business",
    },
    {
      checkListText: "No upfront credit checks",
    },
    {
      checkListText: "Transparent and competitive pricing",
    },
    {
      checkListText: "Fast turnaround",
    },
  ]

  return (
    <div className='checkList'>
      <ul className='pb-9'>
        {
          checkListData.map((checkList, index) =>
            <li key={index} className='flex gap-2 mb-1'>
              <img src={CheckIcon} alt="check icon" />
              <span className='text-dark-dark-2 text-[20px] font-light'>{checkList.checkListText}</span>
           </li>
          )
        }
      </ul>
    </div>
  );
};

export default CheckList;