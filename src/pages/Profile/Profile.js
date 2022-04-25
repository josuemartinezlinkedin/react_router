import React from 'react'
import { ProfileImages } from '../../components'
import { useState } from 'react';
import { Route, Routes, Link, Outlet } from 'react-router-dom';
import ProfileDetails from './ProfileDetails' 
import ProfileEdit from './ProfileEdit'



const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div>
        <h1>Profile</h1>
      <button onClick={()=>setOpen(!open)}>
        {!open ? "open images" : <ProfileImages/>}
      </button>
      </div>
      <div>
    <Routes>
        <Route path='/details' element={<ProfileDetails />} />
        <Route path='/edit' element={<ProfileEdit />} />
      </Routes>
      <ul>
        <li>
          <Link to='/profile/details'>View Profile Details</Link>
        </li>
        <li>
          <Link to='/profile/edit'>Edit Your Profile</Link>
        </li>
      </ul>
      </div>
      <Outlet/>
    </div>

  )
}

export default Profile