// import React from 'react'
import React,{NavLink} from 'react-router-dom'
import './nav.css'


const NavBar = () => {
  return (
    <div>
        <div className='Nav'>
            <ul>
                {/* <li><h1><Link to='/'>Home</Link></h1></li>
                <li><h1><Link to='/about'>About</Link></h1></li>
                <li><h1><Link to='/skills'>Skills</Link></h1></li> */}
                <h1><li><NavLink to='/'>Home</NavLink></li></h1>
                <h1><li><NavLink to='/about'>About</NavLink></li></h1>
                <h1><li><NavLink to='/skills'>Skills</NavLink></li></h1>
                <h1><li><NavLink to='/achievements'>Achievements</NavLink></li></h1>
            </ul>
        </div>

    </div>
  )
}

export default NavBar