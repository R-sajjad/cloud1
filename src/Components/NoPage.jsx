import React from 'react';

const NoPage = () => {
  return (
    <>
      <h1 className='text-rose-100 font-bold text-4xl ml-4 mt-20 md:ml-20'>Technologies/Skills</h1>

      <div className='w-full max-w-screen-xl mx-auto px-4 md:px-8 mt-10 md:mt-20'>
        <div className='w-full md:w-[800px] md:h-[400px] md:mx-auto bg-neutral-800 mb-20 mt-10 md:mt-10 rounded-lg md:flex md:justify-center'>
          <div className="max-w-lg md:w-[400px] mx-auto p-4 text-white justify-around">
            <h2 className="text-lg font-bold mb-4">Front-end Skills</h2>

            <div className="mb-4">
              <div className="font-bold mb-1">HTML</div>
              <div className="w-full bg-gray-200 rounded-lg">
                <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-lg" style={{ width: '90%' }}>
                  90%
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="font-bold mb-1">CSS</div>
              <div className="w-full bg-gray-200 rounded-lg">
                <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-lg" style={{ width: '80%' }}>
                  80%
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="font-bold mb-1">JavaScript</div>
              <div className="w-full bg-gray-200 rounded-lg">
                <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-lg" style={{ width: '85%' }}>
                  85%
                </div>
              </div>
            </div>

            <div className="mb-4">
              <div className="font-bold mb-1">React</div>
              <div className="w-full bg-gray-200 rounded-lg">
                <div className="bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-lg" style={{ width: '75%' }}>
                  75%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoPage;
