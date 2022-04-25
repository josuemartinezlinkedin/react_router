import React from 'react'
import { ProfileImages } from '../../components'
import { useState } from 'react';


const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
        <h1>Profile</h1>
      <button onClick={()=>setOpen(!open)}>
        {!open ? "open images" : <ProfileImages/>}
      </button>
    </div>
  )
}

export default Profile