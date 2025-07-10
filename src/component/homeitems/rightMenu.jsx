import React from 'react'
import FriendRequest from '../rightNenuComponent/friendRequest'
import Birthday from '../rightNenuComponent/birthday'
import Ad from '../rightNenuComponent/ad'

export default function RightMenu({user}) {
  return (
    <div>
      <FriendRequest></FriendRequest>
      <Birthday ></Birthday>
     <Ad size="md" />
    </div>
  )
}
