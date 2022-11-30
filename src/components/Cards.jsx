import React from 'react'

export const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className=' max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full border shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-100'>
                <h2 className='text-2xl font-bold text-center py-8 bg-[#7c3aed]'>Basico</h2>
                <p className='text-2xl font-medium text-center py-5'>$200</p>
                <div className='text-1xl font-medium text-center py-5'>
                    <p className=' py-2 border-b'>500 GB Storage</p>
                    <p className=' py-2 border-b'>1 Granted User</p>
                    <p className=' py-2 border-b'>Send uo to 2 GB</p>
                </div>
                <button className='bg-[#020202] w-[200px] text-[#7c3aed] rounded-md my-10 mx-auto font-bold
         py-4 text-center flex justify-center hover:bg-purple-700'>Start Trial</button>
            </div>            <div className='w-full border shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-100'>
                <h2 className='text-2xl font-bold text-center py-8 bg-[#7538df]'>Avanzado</h2>
                <p className='text-2xl font-medium text-center py-5'>$600</p>
                <div className='text-1xl font-medium text-center py-5'>
                    <p className=' py-2 border-b'>500 GB Storage</p>
                    <p className=' py-2 border-b'>1 Granted User</p>
                    <p className=' py-2 border-b'>Send uo to 2 GB</p>
                </div>
                <button className='bg-[#020202] w-[200px] text-[#7c3aed] rounded-md my-10 mx-auto font-bold
         py-4 text-center flex justify-center hover:bg-purple-700'>Start Trial</button>
            </div>           <div className='w-full border shadow-xl flex flex-col py-4 my-4 rounded-lg hover:scale-105 duration-100'>
                <h2 className='text-2xl font-bold text-center py-8 bg-[#6330bb]'>Premiun</h2>
                <p className='text-2xl font-medium text-center py-5'>$1000</p>
                <div className='text-1xl font-medium text-center py-5'>
                    <p className=' py-2 border-b'>500 GB Storage</p>
                    <p className=' py-2 border-b'>1 Granted User</p>
                    <p className=' py-2 border-b'>Send uo to 2 GB</p>
                </div>
                <button className='bg-[#020202] w-[200px] text-[#7c3aed] rounded-md my-10 mx-auto font-bold
         py-4 text-center flex justify-center hover:bg-purple-700'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards