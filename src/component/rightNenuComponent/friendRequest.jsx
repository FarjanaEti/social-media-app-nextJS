import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FriendRequest() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>

      {/*request user */}
     <div className='flex justify-between items-center'>
        <div className='flex  gap-4 items-center justify-between cursor-pointer'>
                <Image src="https://images.pexels.com/photos/32744350/pexels-photo-32744350.jpeg"
              alt=''  className=' w-10 h-10 rounded-full  object-cover' width={40} height={40}
                ></Image>
                <span className='font-medium'>Juliana</span>              
               </div>      
                <div className='flex gap-3 justify-end'>
               <Image
                  src="/accept.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </div>                    
     </div>
     <div className='flex  justify-between items-center'>
        <div className='flex  gap-4 items-center justify-between cursor-pointer'>
                <Image src="https://images.pexels.com/photos/32744350/pexels-photo-32744350.jpeg"
              alt=''  className=' w-10 h-10 rounded-full  object-cover' width={40} height={40}
                ></Image>
                <span className='font-medium'>Juliana</span>              
               </div>      
                <div className='flex gap-3 justify-end'>
               <Image
                  src="/accept.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </div>                    
     </div>
     <div className='flex  justify-between items-center'>
        <div className='flex  gap-4 items-center justify-between cursor-pointer'>
                <Image src="https://images.pexels.com/photos/32744350/pexels-photo-32744350.jpeg"
              alt=''  className=' w-10 h-10 rounded-full  object-cover' width={40} height={40}
                ></Image>
                <span className='font-medium'>Juliana</span>              
               </div>      
                <div className='flex gap-3 justify-end'>
               <Image
                  src="/accept.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </div>                    
     </div>
      
    </div>
  )
}
