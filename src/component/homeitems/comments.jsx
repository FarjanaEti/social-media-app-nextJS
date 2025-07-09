import Image from 'next/image'
import React from 'react'

export default function Comments() {
  return (
    <div className=''>
    {/* your comments */}
    <div className='flex items-center gap-4'>
    <Image src="https://images.pexels.com/photos/32903801/pexels-photo-32903801.jpeg" width={32} height={32} alt='' className='w-8 h-8 rounded-full' />
     <div className='flex-1 flex items-center justify-between bg-slate-100 rounded-xl text-sm px-6 py-2 w-full'>
       <input type="text" placeholder="write a comment.." className='bg-transparent outline-none flex-1' />                       
    <Image alt='' src="/emoji.png" width={16} height={16} className='cursor-pointer' />
     </div>
    </div>
    {/* others comments */}
    <div className=''>
     <div className='flex  justify-between mt-6'>
    {/* avater */}
     <Image
              src="https://images.pexels.com/photos/25382215/pexels-photo-25382215.jpeg"
              alt=""
              width={40}
              height={40}
              className="w-10 ml-2 h-10 rounded-full"
            />
            {/* comments description */}
            <div className='flex  flex-col gap-2'>
             <span className='font-medium'>Moin Uddin</span>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, sed?</p>
           <div className='flex items-center gap-6 text-sm text-gray-500'>
              <div className='flex items-center gap-4 p-2 rounded-xl '>
                         <Image src="/like.png" alt='' width={12} height={12} className='cursor-pointer'></Image> 
                         <span className='text-slate-300'>|</span>                 
                         <span className='text-slate-500'>123 <span className='hidden md:inline'> Likes</span></span>                 
                       </div>   
                       <div>Reply</div>              
           </div>
            </div>

            {/* ICON */}
            <Image
              src="/more.png"
              alt=""
              width={16}
              height={16}
              className="cursor-pointer w-4 h-4"
            ></Image>
     </div>                         
    </div>
    </div>
  )
}
