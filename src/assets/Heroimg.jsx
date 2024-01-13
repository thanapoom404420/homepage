import React from 'react'
import Heroimgg from '/src/assets/assets/images/image-web-3-desktop.jpg'

function Heroimg() {
  return (
    <div className='w-full relative md:block p-5 sm:p-0 flex justify-center items-center h-full'>
     <div className='lg:max-w-[1290px] mx-auto max-w-[1000px] gap-10 block md:flex md:px-[30px]'>
        <img src={Heroimgg} className='w-[500px] md:w-[550px] lg:w-[750px] h-[350px]'/>
        <div className='w-auto block md:flex absolute top-[400px] '>
          <div className='text-6xl md:w-[300px] max-w-[450px] font-bold'>
          <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className='md:w-[280px] px-2 lg:ml-[70px] lg:w-[350px]'>
            <p className='text-black-400 mb-[30px] w-[full] mt-[30px] md:mt-[0px] font-semibold'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
            <button className=' bg-red-950 text-white px-[40px] font-bold py-[8px] tracking-widest mb-[10px]'>READ MORE</button>
          </div>
        </div>
        <div className=' bg-slate-950 absolute sm:relative sm:top-[460px] md:top-[0px] top-[850px] p-10 max-w-[360px] sm:max-w-[500px]'>
          <h2 className='text-yellow-500 font-bold text-3xl'>News</h2>
          <p className='text-white pt-8 pb-3 font-bold text-2xl'>Hydroggen VS Electric Care</p>
          <p className='text-white font-extralight text-2xl mb-[40px]'>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr className='text-white' />
          <p className='text-white pt-8 pb-3 font-bold text-2xl'>Hydroggen VS Electric Care</p>
          <p className='text-white font-extralight text-2xl mb-[40px]'>Will hydrogen-fueled cars ever catch up to EVs?</p>
          <hr className='text-white' />
          <p className='text-white pt-8 pb-3 font-bold text-2xl'>Hydroggen VS Electric Care</p>
          <p className='text-white font-extralight text-2xl mb-[40px]'>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </div>
        
        </div>
    </div>
  )
}

export default Heroimg