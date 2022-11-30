import React from 'react'
import Typed from 'react-typed';
 
function Hero() {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto  text-center flex flex-col justify-center'>
        <div>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#7c3aed] p-2'>Web page </h1>
        <Typed className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#7c3aed] p-2'
                strings={[
                    'Development'
                    ]}
                    typeSpeed={50}
                    backSpeed={50}
                    loop ></Typed>
      <div>
        <button className='bg-[#7c3aed] w-[200px] text-[#020202] rounded-md my-10 mx-auto font-bold
         py-4  hover:bg-purple-700'>Conocenos
          
        </button>
      </div>
        </div>
     </div>
    </div>

  )
}

export default Hero