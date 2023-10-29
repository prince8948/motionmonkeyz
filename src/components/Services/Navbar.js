import React from 'react'
import { NavLink, Link} from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    return (
        <>
            <nav>
                <Link to='/service' className='logo'> MotionMonkeyz </Link>
                <div onClick={()=> {setMenuOpen(!menuOpen)}} className='menu'>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul className={menuOpen ? "open":""}>
                    <li><NavLink to='/service'>Home</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink to='/feature'>Service</NavLink></li>
                </ul>

            </nav>

        </>
    )
}

export default Navbar