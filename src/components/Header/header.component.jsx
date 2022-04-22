import React from 'react'
import './header.styles.css'

const Header = () => {
  return (
    <div className='Header'>
        <h1>Welcome to all you need to know for routing</h1>
        <div className='nav'>
        <a className='nav area special' href="/">Homepage</a>
        <a className='nav area' href="/About">About</a>
        <a className='nav area' href="/Profile">Profile</a>
        </div>
    </div>
  )
}

export default Header;