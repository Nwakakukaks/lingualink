import React from 'react'
 
export const UserInfoCard = () => {
  return (
   <div className='flex items-center'>
   <div className='bg-lightcyan p-6 text-black space-y-4 flex-1 text-nowrap'>
    <img src='/onecoin.svg'/>
    <p>NFT badges claimed</p>
    <p className='font-extrabold text-9xl '>09</p>
   </div>
   <div className='bg-bisque p-6 text-black space-y-4 flex-1'>
    <img src='/onetimer.svg'/>
    <p>Total sessions</p>
    <p className='font-extrabold text-9xl '>12</p>
   </div>
   <div className='bg-lightblue p-6 text-black space-y-4 flex-1'>
    <img src='/messagequestion.svg'/>
    <p>Average ratings</p>
    <p className='font-extrabold text-9xl '>4.1</p>
   </div>
   </div>
  )
}
