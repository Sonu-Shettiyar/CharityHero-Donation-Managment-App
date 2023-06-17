


import React from 'react'
import logoC from "../images/charityhero_logo.jpg"

import "../styles/navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='logo'> <Link to={"/"}><img width={"100%"} src={logoC} alt="logo" /></Link></div>
            <div className='menu'>
            <div className='menu1'>

                <Link to="#"><div>For individual</div></Link>
                <div><Link to={"/explorcampain"}>For charity</Link></div>
                <div><Link to={"#"}>About us</Link></div>
                <div><Link to={"#"}>Help</Link></div>

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