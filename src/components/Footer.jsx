import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300' >
        <div>
         <h1 className='  w-full text-3xl font-bold text-[#7c3aed] main-div1'>PAGINA</h1>
         
        <p className='py-4'>Donec lectus metus, laoreet convallis finibus at, venenatis nec dolor. Donec ac finibus nisl,Donec lectus metus, laoreet convallis finibus at, venenatis nec dolor. Donec ac finibus nisl, quis aliquet erat.</p>
        <div className='flex justify-between md:w-{75%} my-6'>
            <FaFacebookSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaInstagram size={30}/>
            <FaTwitterSquare size={30}/>
            <FaDribbbleSquare size={30}/>
            </div>
        </div>

    <div className=''>
    <h1 className='  w-full text-3xl font-bold text-[#7c3aed] main-div1'>Comunicate</h1>
        <div className='w-full py-10 px-6 flex flex-col  '>
            <input className='p-3 flex w-full rounded-md' type="email" placeholder="Enter Email"/>
            <button className='bg-[#7c3aed] w-[200px] text-[#020202] rounded-md my-10 mx-auto font-bold
         py-4  hover:bg-purple-700 '>Notificar</button>
         </div>
    </div>
        <div className=' lg:col-span-3 flex justify-between'>
    <div>
        <h3 className='font-medium text-gray-400'>Solutions</h3>
        <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
        </ul>
    </div>
    <div>
        <h3 className='font-medium text-gray-400'>Support</h3>
        <ul>
            <li className='py-2 text-sm'>Pricings</li>
            <li className='py-2 text-sm'>Documentation</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>ApI Status</li>
        </ul>
    </div>
    <div>
        <h3 className='font-medium text-gray-400'>Company</h3>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
         <h3 className='font-medium text-gray-400'>Legal</h3>
        <ul>
            <li className='py-2 text-sm'>Clain</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
        </ul>
    </div>
    
        </div>
    </div>
  )
}

export default Footer