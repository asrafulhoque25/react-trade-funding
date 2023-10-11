import React from 'react'
import tesBg from "/assets/img/tesBg.png";

const Testimonial = () => {
    const styles = {
        backgroundImage: `url(${tesBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      };
  return (
    <div className='section-padding' style={styles}>Testimonial</div>
  )
}

export default Testimonial