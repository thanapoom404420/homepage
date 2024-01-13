import React, {useState} from 'react'
import Logo from '/src/assets/assets/images/logo.svg'
import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'
const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-full h-full'>
        <div className='max-w-[1290px] mx-auto flex justify-between px-[30px] pt-[110px] pb-[65px]'>
         <div>
            <img src={Logo} className='z-20'/>
         </div>
         <ul className='items-center hidden md:flex'>
            <li className='px-6 text-blue-950 text-lg font-semibold duration-300 cursor-pointer hover:scale-110 hover:font-semibold'>Home</li>
            <li className='px-6 text-blue-950  text-lg font-semibold duration-300 cursor-pointer hover:scale-110 hover:font-semibold'>New</li>
            <li className='px-6 text-blue-950  text-lg font-semibold duration-300 cursor-pointer hover:scale-110 hover:font-semibold'>Popular</li>
            <li className='px-6 text-blue-950  text-lg font-semibold duration-300 cursor-pointer hover:scale-110 hover:font-semibold'>Trending</li>
            <li className='px-6 text-blue-950  text-lg font-semibold duration-300 cursor-pointer hover:scale-110 hover:font-semibold'>Categories</li>
         </ul>
         <div onClick={handleNav} className='flex cursor-pointer md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
         </div>
        </div>
        <ul className={nav ? 'flex w-full text-center h-screen absolute top-[200px] bg-[#fff4e6] z-10 flex-col md:hidden duration-300 left-0' : 'absolute left-[-100%]'}>
            <li style={{color:'hsl(236, 13%, 42%)'}} className='py-6 text-lg font-semibold duration-300 cursor-pointer hover:scale-110 hover:font-semibold'>Home</li>
            <li style={{color:'hsl(236, 13%, 42%)'}} className='py-6 text-lg font-semibold duration-300 cursor-pointer hover:scale-110 hover:font-semibold'>New</li>
            <li style={{color:'hsl(236, 13%, 42%)'}} className='py-6 text-lg font-semibold duration-300 cursor-pointer hover:scale-110 hover:font-semibold'>Popular</li>
            <li style={{color:'hsl(236, 13%, 42%)'}} className='py-6 text-lg font-semibold duration-300 cursor-pointer hover:scale-110 hover:font-semibold'>Trending</li>
            <li style={{color:'hsl(236, 13%, 42%)'}} className='py-6 text-lg font-semibold duration-300 cursor-pointer hover:scale-110 hover:font-semibold'>Categories</li>
         </ul>
    </div>
  )
}

export default Nav