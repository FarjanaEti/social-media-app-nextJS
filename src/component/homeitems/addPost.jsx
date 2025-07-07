import Image from 'next/image'
import React from 'react'

export default function AddPost() {
  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      {/* avater */}
      <Image
        src="https://images.pexels.com/photos/32776965/pexels-photo-32776965.jpeg"
        alt=""
        width={48}
        height={48}
        className="w-12 h-12 object-cover rounded-full"
      />

      {/* post */}
      <div className='flex-1'>
        {/* text input */}
        <div className='flex'>
           <textarea
            placeholder="What's on your mind?"
            className="flex-1 bg-slate-100 rounded-lg p-2"
            name="desc"
          ></textarea>
          <div className="">
            <Image
              src="/emoji.png"
              alt=""
              width={20}
              height={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
          
          </div>
        </div>
        {/* post option */}
        <div className='flex flex-wrap items-center gap-4 text-gray-400 mt-4'>
           <div className='flex gap-2 items-center cursor-pointer'>
              <Image src="/addimage.png"  alt=""
              width={20} height={20}
            /> Photo
           </div>
           <div className='flex gap-2 items-center cursor-pointer'>
              <Image src="/addVideo.png"  alt=""
              width={20} height={20}
            /> Vedio
           </div>
           <div className='flex gap-2 items-center cursor-pointer'>
              <Image src="/poll.png"  alt=""
              width={20} height={20}
            /> Poll
           </div>
           <div className='flex gap-2 items-center cursor-pointer'>
              <Image src="/addevent.png"  alt=""
              width={20} height={20}
            /> Event
           </div>
        </div>
      </div>
    </div>
  )
}
