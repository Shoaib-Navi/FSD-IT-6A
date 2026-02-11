import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <div className=''>
            <img width="50px" height="50px"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSZVBdSn-1xDcTSccAw3D6ISpSIP07nzFcQA&s" alt="logo" />
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>Work</li>
            </ul>
        </div>    
    </nav>
  )
}

export default Navbar
