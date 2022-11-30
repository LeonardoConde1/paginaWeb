import React from 'react'
import Imagen from './Imagen'

export const Technologies = () => {
  return (
    <div className=' max-w-[1240px] mx-auto lm:grid-cols-3'>
      <div className='h-[200px] m-auto overflow-hidden '>
        <div className='flex  w-[calc(250px*15)] animate-scroll  '>
          <img className='w-[150px] mx-auto my-p4' src={Imagen.img1} alt='/' />
          <img className='w-[150px] mx-auto my-p4' src={Imagen.img2} alt='/' />
          <img className='w-[150px] mx-auto my-p4' src={Imagen.img3} alt='/' />
          <img className='w-[150px] mx-auto my-p4' src={Imagen.img4} alt='/' />
          <img className='w-[150px] mx-auto my-p4' src={Imagen.img5} alt='/' />
          <img className='w-[150px] mx-auto my-p4' src={Imagen.img6} alt='/' />
          <img className='w-[150px] mx-auto my-p4' src={Imagen.img7} alt='/' />
          <img className='w-[150px] mx-auto my-p4' src={Imagen.img8} alt='/' />
          <img className='w-[150px] mx-auto my-p4' src={Imagen.img9} alt='/' />
          <img className='w-[150px] mx-auto my-p4' src={Imagen.img11} alt='/' />    
        </div>
      </div>
    </div>
  )
}

export default Technologies;