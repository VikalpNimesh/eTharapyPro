import React from 'react'
import SideBar from './side bar/SideBar'
import UserSection from './user-section/UserSection'

const Profile = () => {
  return (
      <div className='profile-main d-flex '>
      
      <SideBar/>
      <UserSection/>
      </div>
  )
}

export default Profile