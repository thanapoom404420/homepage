import React from 'react'
import pic1 from '/src/assets/assets/images/image-retro-pcs.jpg'
import pic2 from '/src/assets/assets/images/image-top-laptops.jpg'
import pic3 from '/src/assets/assets/images/image-gaming-growth.jpg'
function Bottom() {
  return (
    <div  className='w-full flex justify-center md:justify-normal lg:justify-center h-full'>
        <div className='lg:w-[1090px] xl:w-[1290px] absolute top-[1750px] sm:top-[1650px] md:top-[720px] xl:top-[800px] pt-[100px]  px-[30px] flex flex-col xl:px-[30px] lg:px-[160px] xl:flex-row mx-auto'>
         <div className='flex mt-[30px] max-w-[600px]'>
            <img src={pic1} className='max-w-[150px] max-h-[200px]'/>
            <div className='p-10'>
                <h1 className='font-bold text-black text-4xl'>01</h1>
                <h2 className='font-bold text-orange-400 py-2'>Reviving Retro PCs</h2>
                <p className='font-bold text-black'>What happens when old PCs are given modern upgrades?</p>
            </div>
         </div>
         <div className='flex mt-[30px] max-w-[600px]'>
            <img src={pic2} className='max-w-[150px] max-h-[200px]' />
            <div className='p-10'>
                <h1 className='font-bold text-black text-4xl'>02</h1>
                <h2 className='font-bold text-orange-400 py-2'>Reviving Retro PCs</h2>
                <p className='font-bold text-black'>What happens when old PCs are given modern upgrades?</p>
            </div>
         </div>
         <div className='flex mt-[30px] max-w-[600px]'>
            <img src={pic3} className='max-w-[150px] max-h-[200px]' />
            <div className='p-10'>
                <h1 className='font-bold text-black text-4xl'>03</h1>
                <h2 className='font-bold text-orange-400 py-2'>Reviving Retro PCs</h2>
                <p className='font-bold text-black'>What happens when old PCs are given modern upgrades?</p>
            </div>
         </div>
        </div>
    </div>
  )
}

export default Bottom