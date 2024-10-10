import React from 'react'

const About = () => {
  return (
    <>
     <h1 className='text-rose-100 font-bold text-4xl ml-4 mt-20 md:ml-20 
    '>About Me</h1>
    <div className='flex flex-col md:flex-row text-white font-sans md:mt-11 items-center justify-start'>
      <div className='md:w-1/2 ml-10'>
        <img src="public\Profile.png" alt="" className='rounded-full bg-gray-950 h-60 mx-auto md:mx-0  ' />
      </div>
  
      <div className='md:w-1/2 mt-10 md:mt-0'>
        <h1 className='text-[40px] font-serif'>Hi, I'm</h1>
        <h1 className='text-[40px] font-serif'>AbulHassan</h1>
        <p className="text-center md:text-left"> A Passionate frontend developer dedicated to crafting engaging <br/> digital experiences with expertise in design and coding.</p>
        <a href="#" className="block mt-4 md:mt-10 text-center md:text-left">
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md transition duration-300 ease-in-out hover:from-purple-600 hover:to-blue-500 hover:text-gray-200">Hire me</button>
        </a>
      </div>
      <div className='bg-black'></div>
    </div>
    </>
  )
}

export default About