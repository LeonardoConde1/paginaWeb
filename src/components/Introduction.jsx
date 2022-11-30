import React from 'react'
import imagen from './imagenes/imagen.png'


const Introduction = () => {
  return (
    <div className='w-full bg-white py-16 px-4 h24'>
        <div className='max-w-[1240px] mx-auto grid md:grid-col-2'>
            <img className='w-[500px] mx-auto my-p4' src={imagen} alt='/' />
        </div>
        <div className='flex flex-col justify-center max-w-[1240px] mx-auto'>
            <h1 className=' text-center md:text-4xl sm:text-3xl text-2xl font-bold py-4' >Crea paginas web responsivas</h1>
            <p>orem ipsum dolor sit amet, consectetur adipiscing elit. 
             Donec lorem nibh, sollicitudin eget arcu sit amet, efficitur fermentum ex. Mauris congue turpis eu ligula ultricies, in scelerisque elit laoreet.
             Donec lectus metus, laoreet convallis finibus at, venenatis nec dolor. Donec ac finibus nisl, quis aliquet erat. Proin dictum sem nisi,Donec lorem nibh, 
             sollicitudin eget arcu sit amet, efficitur fermentum ex. Mauris congue turpis eu ligula ultricies, in scelerisque elit laoreet.
             Donec lectus metus, laoreet convallis finibus at, venenatis nec dolor. Donec ac finibus nisl, quis aliquet erat. Proin dictum sem nisi, </p>
        </div>

        <div>
        <button className='bg-[#020202] w-[200px] text-[#7c3aed] rounded-md my-10 mx-auto font-bold
         py-4 text-center flex justify-center hover:bg-purple-700'>Planes
        </button>
      </div>
    </div>
  )
}

export default Introduction