import React from 'react'
import logoC from "../images/charityhero_logo.jpg"
import "../styles/navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='logo'><img width={"100%"} src={logoC} alt="logo" /></div>
            <div className='menu'>
            <div className='menu1'>
                <Link to="#"><button>For individual</button></Link>
                <Link to={"#"}><button>For charity</button></Link>
                <Link to={"#"}><button>About us</button></Link>
                <Link to={"#"}><button>Help</button></Link>
            </div>
            <div className='menu2'>
                <Link to={"/login"}><button>Login/Signup</button></Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar