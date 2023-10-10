import React, { useEffect, useState } from 'react'
import logo from '/assets/img/logo.svg'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toggleMenu=()=>{
        setIsMenuOpen(!isMenuOpen);
    }
    useEffect(()=>{
        const handleScroll = ()=>{
            if(window.scrollY > 100){
                setIsSticky(true);
            }
            else{
                setIsSticky(false)
            }
        }
        window.addEventListener('scroll', handleScroll)
        return()=>{
            window.addEventListener('scroll', handleScroll)
        }
    })
    // const navItems = [
    //     {link:"Home",path:"home"}
    // ]
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0 '>
        <nav>
            <div>
                <a href="#"><img src={logo} alt="" /></a>
                <ul className=''>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Home</a></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default Navbar