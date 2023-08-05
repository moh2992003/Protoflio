import React from 'react';
import WorkImg from "../assests/projects/workImg.jpeg";
import realEstate from '../assests/projects/realestate.jpg';
import Tailwind from '../assests/projects/Tailwindcss.png';
import GamingModel from '../assests/projects/GamingModel.png';
import StoreGames from "../assests/projects/Store-GAMES.png";
import Template1 from '../assests/projects/Template1.png';

  
const Work = () => {
  return (
    <div id='Works' name='work' className='md:h-screen text-gray-300 bg-[#0a192f]'>
      {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Works</p>
            <p className='py-6'>// Check out some of my recent works</p>
        </div>
        
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* item */ }
          <div
            style={{ backgroundImage: `url(${WorkImg})` }}
            className='shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */ }
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-white'>
React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/' onClick={(e) => { e.preventDefault(); }}>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={(e) => {e.preventDefault()}}>Working On It</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${realEstate})` }}
            className='shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */ }
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-white'>
React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg' onClick={(e) => {e.preventDefault()}}>Working On It</button>                </a>
              </div>
            </div>
          </div>
                    <div
            style={{ backgroundImage: `url(${Tailwind})` }}
            className='shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */ }
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-white'>
React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://taillwind-simple-page.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/moh2992003/Tailwind-page'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${GamingModel})` }}
            className='shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */ }
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-white'>
React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://gaming-model-835e0.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/moh2992003/Gaming-template'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
                    <div
            style={{ backgroundImage: `url(${StoreGames})` }}
            className='shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */ }
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-white'>
React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://store-games-7b659.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/moh2992003/Games-Store'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Template1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded flex justify-center items-center mx-auto content-div'>
            
            {/* Hover Effects */ }
            <div className='opacity-0 group-hover:opacity-100'>
              <span className='text-2xl font-bold text-white tracking-white'>
React JS Application
              </span>
              <div className='pt-8 text-center'>
                <a href='https://soft-proje.web.app/'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href='https://github.com/moh2992003/Template--Ui'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>

        </div>
    </div>
  )
}

export default Work
