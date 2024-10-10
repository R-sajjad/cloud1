import React from 'react'

const Projects = () => {
  return (
    <>
    <h1 className='text-rose-100 font-bold text-4xl mt-20 md:ml-20  '>My Projects</h1>

    <div className='flex flex-col md:flex-row justify-center items-center'>
    <div className='flex flex-col md:flex-row justify-center items-center'>
  <div className='bg-[#343333] w-80 h-120 md:ml-10 mt-4 md:mt-20 mb-4 md:mb-10 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md transition-transform duration-1000 ease-in-out hover:from-purple-600 hover:to-blue-500 hover:text-gray-200 transform hover:scale-105'>
    <img src="public\card-1.jpg" alt="" className='rounded-sm' />
    <h1 className='font-bold ml-2'>Debit card</h1>
    <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum nobis quia.</p>
    <a className='ml-2' href="#">see more...</a>
  </div>
</div>


  <div className='bg-[#343333] w-80 h-120 md:ml-20 mt-4 md:mt-20 mb-4 md:mb-10 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md transition-transform duration-1000 ease-in-out hover:from-purple-600 hover:to-blue-500 hover:text-gray-200 transform hover:scale-105'>
  <img src="public\card4.pan.png" alt="" className='rounded-sm' />
  <h1 className='font-bold ml-2 mt-6'>Ovasis Technologies</h1>
  <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum nobis quia.</p>
  <a className='ml-2' href="#">see more...</a>
</div>



  <div className='bg-[#343333] w-80 h-120  md:ml-20 mt-4 md:mt-20 mb-4 md:mb-10 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md transition duration-1000 ease-in-out hover:from-purple-800 hover:to-blue-500 hover:text-gray-200 relative overflow-hidden hover:scale-110 transform '>
    <img src="public\card-2.png" alt="" className='rounded-lg' />
    <h1 className='font-bold ml-2'>School Management</h1>
    <p className='ml-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus earum nobis quia.</p>
    <a className='ml-2' href="#">see more...</a>
  </div>
</div>
    </>
  )
}

export default Projects