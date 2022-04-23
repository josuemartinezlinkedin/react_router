import React from 'react'
import { ProfileImages } from '../../components'

const Profile = ({login}) => {
  return (
    <div>
        <h1>Profile</h1>
    <ProfileImages login={login}/>
    </div>
  )
}

export default Profile