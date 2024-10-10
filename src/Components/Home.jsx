import React from 'react';
import Contact from './Contact';
import Teachnalogies from './Teachnalogies';
import About from './About';

const Home = () => {
  return (
    <>
    <div className="container md:w-full mx-auto  px-4 ">
      <div className='flex flex-col md:flex-row md:justify-between items-center border-gray-700 text-white md:mt-20'>
        <div className='md:w-1/2 md:mr-4'>
          <h1 className='text-green-400 text-5xl font-extrabold animate-pulse md:text-start'>Hey! I'm</h1>
          <br />
          
          <h1 className='text-green-400 text-5xl font-extrabold animate-pulse md:text-start'>Web Developer and <br/> Web Designer</h1>
          <br/>
          <p className='text-center md:text-left'>As a frontend developer, I'm dedicated to crafting engaging digital experiences. With expertise in design and coding, I specialize in creating dynamic, user-friendly websites. I'm committed to staying updated on the latest technologies to deliver innovative solutions. Let's collaborate and bring your vision to life with creativity and  precision..</p>
        </div>
        <div className="text-5xl font-bold text-center">
      <div className="animate-fadeIn animate-bounce duration-500 delay-1000">
       
      </div>
    </div>
        <div className='md:w-1/2 md:ml-4 md:mt-0 mt-8'>
          <img src="public\Profile.png" alt="" className='md:w-80% gap-7 rounded-lg bg-gray-950' />
        </div>
      </div>
    </div>

    <About/>

    <h1 className='text-rose-100 font-bold text-4xl  mt-20 md:ml-20 '>My Projects</h1>

    <div className='flex flex-col md:flex-row justify-center items-center'>
    <div className='flex flex-col md:flex-row justify-center items-center'>
  <div className='bg-[#343333] w-80 h-120 md:ml-10 mt-4 md:mt-20 mb-4 md:mb-10 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md transition-transform duration-300 ease-in-out hover:from-purple-600 hover:to-blue-500 hover:text-gray-200 transform hover:scale-105'>
    <img src="public\card-1.jpg" alt="" className='' />
    <h1 className='font-bold ml-2'>Debit card</h1>
    <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum nobis quia.</p>
    <a className='ml-2' href="#">see more...</a>
  </div>
</div>


  <div className='bg-[#343333] w-80 h-120 md:ml-20 mt-4 md:mt-20 mb-4 md:mb-10 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md transition-transform duration-300 ease-in-out hover:from-purple-600 hover:to-blue-500 hover:text-gray-200 transform hover:scale-105'>
  <img src="public\card4.pan.png" alt="" className='' />
  <h1 className='font-bold ml-2 mt-6'>Ovasis Technologies</h1>
  <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum nobis quia.</p>
  <a className='ml-2' href="#">see more...</a>
</div>



  <div className='bg-[#343333] w-80 h-120  md:ml-20 mt-4 md:mt-20 mb-4 md:mb-10 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md transition duration-700 ease-in-out hover:from-purple-800 hover:to-blue-500 hover:text-gray-200 relative overflow-hidden hover:scale-110 transform '>
    <img src="public\card-2.png" alt="" className='' />
    <h1 className='font-bold ml-2'>School Management</h1>
    <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum nobis quia.</p>
    <a className='ml-2' href="#">see more...</a>
  </div>
</div>



<Teachnalogies/>


<h1 className='text-rose-100 font-bold text-4xl ml-4 mt-20 md:ml-20 '>Contact Info</h1>
    
    <Contact/>

<h1 className='text-rose-100 font-bold text-4xl ml-4 mt-20 md:ml-20 '>Social Links</h1>


<div className='flex flex-row flex-wrap mt-5 bg-neutral-800 mb-20 justify-center md:justify-around gap-7 p-8'>
  <div className='dark:md:hover:bg-white cursor-pointer h-10 w-10 p-1 hover:bg-white hover:rounded-full'>
    <img src="public\icons8-facebook-48.png" alt="facebook" />
  </div>
  <div className='dark:md:hover:bg-white cursor-pointer h-10 w-10 p-1 hover:bg-white hover:rounded-full'>
    <img src="public\icons8-circled-x-50.png" alt="" />
  </div>
  <div className='dark:md:hover:bg-white cursor-pointer h-10 w-10 p-1 hover:bg-white hover:rounded-full'>
    <img src="public\icons8-telegram-app-48.png" alt="" />
  </div>
  {/* <div className='dark:md:hover:bg-white h-10 w-10 p-1 hover:bg-white hover:rounded-full'><img src="public\icons8-tiktok-48.pngv" alt="" /></div> */}
  <div className='dark:md:hover:bg-white cursor-pointer h-10 w-10 p-1 hover:bg-white hover:rounded-full transition duration-700 ease-in-out overflow-hidden rounded-full'>
    <img src="public\icons8-behance-48 (1).png" alt="behance" />
  </div>
  <div className='dark:md:hover:bg-white cursor-pointer h-10 w-10 p-1 hover:bg-white hover:rounded-full'>
    <img src="public\icons8-github-48.png" alt="" />
  </div>
</div> 

<hr className='bg-gradient-to-r from-blue-500 to-purple-600'/>

<footer className="bg-neutral-800 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="text-center md:text-left mb-4 md:mb-0 relative">
          <p className="text-lg font-bold">Abul Hassan</p>
          <p>Front-end Developer & Designer</p>
          <div className="container mx-auto fonts-sans">
        <p>&copy; {new Date().getFullYear()} Light Teachnalogies . All Rights Reserved.</p>
      </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <a href="#" className="mr-4 hover:text-[#0ea5e9]">Home</a>
          <a href="#" className="mr-4 hover:text-[#0ea5e9]">Portfolio</a>
          <a href="<About/>" className="mr-4 hover:text-[#0ea5e9]">About</a>
          <a href="<Contact/>" className="hover:text-[#0ea5e9]">Contact</a>
        </div>
      </div>
    </footer>
    
    </>
  )
}

export default Home;
