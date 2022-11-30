import React, { useState }  from 'react'
import { AiOutlineMenuUnfold,AiOutlineMenuFold } from "react-icons/ai";


const Navbar = () => {

    const[nav, setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav);
    };
  return (
    <div className=' flex justify-between items-center h24 max-w-[1240px] mx-auto px-5 text-white '>
        <h1 className='  w-full text-3xl font-bold text-[#7c3aed] main-div1' >PAGINA</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>Recursos</li>
            <li className='p-4'>Experiencia</li>
            <li className='p-4'>Contacto</li>

        </ul>
        <div onClick={handleNav} className=' block md:hidden w-[20%] '>
              {!nav ? <AiOutlineMenuUnfold size={50}/> : <AiOutlineMenuFold size={50}/>}
        </div>

        <div className={nav ? ' fixed right-10 top-10 w-[30%] h-full border-l border-r-gray-900 ease-in-out duration-300' : 'fixed right-[-100%]'}>
            <ul className='p-5 uppercase'>
            <li className='p-4 border-b border-gray-600' >Home</li>
            <li className='p-4 border-b border-gray-600'>Recursos</li>
            <li className='p-4 border-b border-gray-600'>Experiencia</li>
            <li className='p-4 border-b border-gray-600'>Contacto</li>
            </ul>
        </div>
    </div>
  );
};

export default Navbar;