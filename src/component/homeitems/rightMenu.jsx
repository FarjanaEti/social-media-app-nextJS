import React from 'react'
import FriendRequest from '../rightNenuComponent/friendRequest'
import Birthday from '../rightNenuComponent/birthday'
import Ad from '../rightNenuComponent/ad'
import UserInfo from '../rightNenuComponent/userInfo'
import UserMedia from '../rightNenuComponent/userMedia'

export default function RightMenu({user}) {
  return (
    <div>
       {user? (
        <>
        <UserInfo user={user}></UserInfo>
        <UserMedia user={user}></UserMedia>
        </>
      ):null}
      <FriendRequest></FriendRequest>
      <Birthday ></Birthday>
     <Ad size="md" />
    </div>
  )
}
