import Image from 'next/image'
import React from 'react'

export default function Stories() {
  return (
    <div className='p-4 text-xs bg-white rounded-lg overflow-scroll shadow-md scrollbar-hide'>
      <div className='flex gap-8 w-max'>
       {/*  story */}
       <div className='flex flex-col gap-2 items-center cursor-pointer'>
        <Image src="https://images.pexels.com/photos/32776965/pexels-photo-32776965.jpeg"
       alt='' className=' w-20 h-20 rounded-full ring-2 object-cover' width={80} height={80}
        ></Image>
        <span className='font-medium'>Pritha</span>
       </div>
       <div className='flex flex-col gap-2 items-center cursor-pointer'>
        <Image src="https://images.pexels.com/photos/31900651/pexels-photo-31900651.jpeg"
      alt=''  className=' w-20 h-20 rounded-full ring-2 object-cover' width={80} height={80}
        ></Image>
        <span className='font-medium'>Anika</span>
       </div>
       <div className='flex flex-col gap-2 items-center cursor-pointer'>
        <Image src="https://images.pexels.com/photos/32744350/pexels-photo-32744350.jpeg"
      alt=''  className=' w-20 h-20 rounded-full ring-2 object-cover' width={80} height={80}
        ></Image>
        <span className='font-medium'>Jule</span>
       </div>
       <div className='flex flex-col gap-2 items-center cursor-pointer'>
        <Image src="https://images.pexels.com/photos/31900651/pexels-photo-31900651.jpeg"
      alt=''  className=' w-20 h-20 rounded-full ring-2 object-cover' width={80} height={80}
        ></Image>
        <span className='font-medium'>Anika</span>
       </div>
       <div className='flex flex-col gap-2 items-center cursor-pointer'>
        <Image src="https://images.pexels.com/photos/974266/pexels-photo-974266.jpeg"
      alt=''  className=' w-20 h-20 rounded-full ring-2 object-cover' width={80} height={80}
        ></Image>
        <span className='font-medium'>Nihal</span>
       </div>
       <div className='flex flex-col gap-2 items-center cursor-pointer'>
        <Image src="https://images.pexels.com/photos/3771511/pexels-photo-3771511.jpeg"
      alt=''  className=' w-20 h-20 rounded-full ring-2 object-cover' width={80} height={80}
        ></Image>
        <span className='font-medium'>Fahim</span>
       </div>
      </div>                         
    </div>
  )
}
