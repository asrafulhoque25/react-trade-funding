import React from 'react'
import backgroundImage from '/assets/img/growandsave.png';
const GrowSave = () => {
    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    
      
const jsonData = {
    key1: 'Bringing together the best products that fuel business <span style="color: #FF5E5A;"> Growth</span> and help you <span style="color: #FF5E5A;">Save</span>.',
  };
  return (
    <div className='growandsave section-padding' style={styles}>
        <div className="container">
        <div className='common-title mx-auto' style={{maxWidth:"870px"}}>
        <h2 className=' text-dark-dark-1 text-[48px]' dangerouslySetInnerHTML={{ __html: jsonData.key1 }} />
        </div>
        </div>
    </div>
  )
}

export default GrowSave