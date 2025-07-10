import Feed from '@/component/homeitems/feed'
import LeftMenu from '@/component/homeitems/leftMenu'
import RightMenu from '@/component/homeitems/rightMenu'
import React from 'react'

export default function ProfilePage() {
  return (
   <div className="flex gap-6 pt-6">
         {/* left */}
        <div className="hidden xl:block w-[20%] border">
       <LeftMenu></LeftMenu>
        </div>
        {/* center */}
        <div className="w-full lg:w-[70%] xl:w-[50%] border">
       <div className="flex flex-col gap-4">
        
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
