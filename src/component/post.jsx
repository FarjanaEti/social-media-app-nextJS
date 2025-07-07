import Image from 'next/image'
import React from 'react'

export default function Post() {
  return (
    <div className=' flex flex-col gap-4'>
      {/* user                         */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Image src="https://images.pexels.com/photos/31900651/pexels-photo-31900651.jpeg"
          alt='' width={40} height={40} className='w-10 h-10 rounded-full'>
          </Image>
          <span className='font-medium'>Fatima Jule </span>
        </div>
        <Image src="/more.png" alt='' width={16} height={16}></Image>
      </div>

      {/* post description                      */}
      <div className='flex flex-col gap-4'>
        <div className='w-full min-h-96 relative'>
          <Image src="https://images.pexels.com/photos/32710487/pexels-photo-32710487.jpeg" alt='' fill className='rounded-none object-cover'></Image>                     
        </div>                      
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam beatae molestiae nostrum exercitationem vel accusamus aperiam, amet porro suscipit enim.</p>
      </div>
      {/* interaction                        */}
      <div className='flex items-center justify-between text-sm mt-4'>
       {/* like */}
       <div className='flex gap-8'>
          <div className='flex items-center gap-4 p-2 rounded-xl bg-slate-200'>
            <Image src="/like.png" alt='' width={16} height={16} className='cursor-pointer'></Image> 
            <span className='text-slate-300'>|</span>                 
            <span className='text-slate-500'>123 <span className='hidden md:inline'> Likes</span></span>                 
          </div>
       </div>
       {/* comment */}
       <div className='flex gap-8'>
          <div className='flex items-center gap-4 p-2 rounded-xl bg-slate-100'>
            <Image src="/comment.png" alt='' width={16} height={16} className='cursor-pointer'></Image> 
            <span className='text-slate-300'>|</span>                 
            <span className='text-slate-500'>123 <span className='hidden md:inline'> Comment</span></span>                 
          </div>
       </div>
       {/* share */}
       <div className='flex gap-8'>
          <div className='flex items-center gap-4 p-2 rounded-xl bg-slate-200'>
            <Image src="/share.png" alt='' width={16} height={16} className='cursor-pointer'></Image> 
            <span className='text-slate-300'>|</span>                 
            <span className='text-slate-500'>123 <span className='hidden md:inline'> Share</span></span>                 
          </div>
       </div>
      </div>
    </div>
  )
}
