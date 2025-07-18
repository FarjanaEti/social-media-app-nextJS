import Feed from '@/component/homeitems/feed'
import LeftMenu from '@/component/homeitems/leftMenu'
import RightMenu from '@/component/homeitems/rightMenu'
import Image from 'next/image'
import React from 'react'

export default function ProfilePage() {
  return (
   <div className="flex gap-6 pt-6">
         {/* left */}
        <div className="hidden xl:block w-[20%] border">
       <LeftMenu type="home"></LeftMenu>
        </div>
        {/* center */}
        <div className="w-full lg:w-[70%] xl:w-[50%] border">
       <div className="flex flex-col gap-4">
        {/* user profile start */}
            <div className="flex flex-col items-center justify-center">
            <div className="w-full h-64 relative">
              <Image
                src="https://images.pexels.com/photos/29538442/pexels-photo-29538442.jpeg"
                alt=""
                fill
                className="rounded-md object-cover"
              />
              <Image
                src="https://images.pexels.com/photos/29538442/pexels-photo-29538442.jpeg"
                alt=""
                width={128}
                height={128}
                className="w-32 h-32 rounded-full absolute left-0 right-0 m-auto -bottom-16 ring-4 ring-white object-cover"
              />
            </div>
            <h1 className="mt-20 mb-4 text-2xl font-medium">
              Mrs.X
            </h1>
            <div className="flex items-center justify-center gap-12 mb-4">
              <div className="flex flex-col items-center">
                <span className="font-medium">54</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">10.5k</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">0</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
        {/* user profile end */}
        <Feed></Feed>
       </div>
        </div>
        {/* right */}
        <div className="hidden lg:block w-[30%] border">
         <RightMenu user="test"></RightMenu>
         </div>
       </div>
  )
}
