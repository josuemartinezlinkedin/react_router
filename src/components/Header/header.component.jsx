import {Link} from 'react-router-dom'
import './header.styles.css'

const Header = () => {
  return (
    <div className='Header'>
        <h1>Welcome to all you need to know for routing</h1>
        <div className='nav'>
        <Link className='nav area special' to="/">Homepage</Link>
        <Link className='nav area' to="/about">About</Link>
        <Link className='nav area' to="/profile">Profile</Link>
        {/* Proble with below code is that it will refresh whole page and rerender components
        <a className='nav area special' href="/">Homepage</a>
        <a className='nav area' href="/About">About</a>
        <a className='nav area' href="/Profile">Profile</a> */}
        </div>
    </div>
  )
}

export default Header;