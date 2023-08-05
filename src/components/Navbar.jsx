import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa';
import Logo from '../assests/logo.png';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

  

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () =>  setNav(!nav);
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} ali="logo" style={{width: "50px"}} />
      </div>

      { /* This Menu */}
        <ul className='hidden md:flex'>
        <li><a href='#' className='duration-150 hover:text-pink-600'>Home</a></li>        
          <li><a href='#About' className='duration-150 hover:text-pink-600'>About</a></li>
          <li><a href='#Skills' className='duration-150 hover:text-pink-600'>Skills</a></li>
          <li><a href='#Works' className='duration-150 hover:text-pink-600'>Works</a></li>
          <li><a href='#Contact' className='duration-150 hover:text-pink-600'>Contact</a></li>
        </ul>

      {/* Burger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaBars />}
      </div>
      {/* Mobil Menu */ }

      <ul className={!nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center" }>
          <li className='py-6 text-4xl duration-150 hover:text-pink-600'><a href='#'>Home</a></li>   
          <li className='py-6 text-4xl duration-150 hover:text-pink-600'><a href='#About'>About</a></li>
          <li className='py-6 text-4xl duration-150 hover:text-pink-600'><a href='#Skills'>Skills</a></li>
          <li className='py-6 text-4xl duration-150 hover:text-pink-600'><a href='#Works'>Works</a></li>
          <li className='py-6 text-4xl duration-150 hover:text-pink-600'><a href='#Contact'>Contact</a></li>
      </ul>
      

      {/* Social iocns */ }

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>

        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a href='https://www.linkedin.com/in/mohamed-alkhyat-5b92a6243' className='flex justify-between items-center w-full text-gray-300'>Linkedin <FaLinkedin size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a href='https://github.com/moh2992003' className='flex justify-between items-center w-full text-gray-300'>Github <FaGithub size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <a href="mailto:mohamedalkhyat97@gmail.com" className='flex justify-between items-center w-full text-gray-300'>Email <HiOutlineMail size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a href='/' className='flex justify-between items-center w-full text-gray-300'>Resume <BsFillPersonLinesFill size={30} /></a>
          </li>
        </ul>

      </div>
      
    </div>
  )
}

export default Navbar
