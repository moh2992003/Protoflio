import React from 'react';
import HTML from '../assests/html.png';
import CSS from '../assests/css.png';
import JavaScript from '../assests/javascript.png';
import ReactImg from '../assests/react.png';
import Linux from '../assests/linux.png';
import FireBase from '../assests/firebase.png';
import GitHub from '../assests/github.png';
import Tailwindcss from '../assests/projects/tailwind.png';


const Skills = () => {
  return (
    <div id='Skills' name='skills' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex-col justify-center w-full h-full text-gray-300'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto' src={HTML} alt="HTML-icon" />
            <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto' src={CSS} alt="CSS-icon" />
            <p className='my-4'>CSS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript-icon" />
            <p className='my-4'>JavaScript</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto' src={ReactImg} alt="ReactImg-icon" />
            <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto' src={GitHub} alt="GitHub-icon" />
            <p className='my-4'>GITHUB</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto' src={Linux} alt="Linux-icon" />
            <p className='my-4'>Linux</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto' src={Tailwindcss} alt="Tailwindcss-icon" />
            <p className='my-4'>Tailwind</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-300'>
            <img className='w-20 mx-auto' src={FireBase} alt="FireBase-icon" />
            <p className='my-4'>FireBase</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
