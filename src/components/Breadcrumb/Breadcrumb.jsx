/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import arrowRight from '/assets/img/arrow-right.svg'

const Breadcrumb = ({routeName}) => {
  return (
    <div className='breadcrumb py-8'>
        <div className="container">
            <div className="breadcrumb-wrap flex items-center gap-3 ">
                <Link to={"/"}>Home</Link>
                <span><img src={arrowRight} alt="" /></span>
                <Link >{routeName?.charAt(0)?.toUpperCase() + routeName.slice(1)}</Link>  
            </div>
        </div>
    </div>
  )
}

export default Breadcrumb