
import "../styles/navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='navbar'>
            <div className='logo'></div>
            <div className='menu'>
            <div className='menu1'>
                <Link to="#"><div>For individual</div></Link>
                <div><Link to={"/explorcampain"}>For charity</Link></div>
                <div><Link to={"#"}>About us</Link></div>
                <div><Link to={"#"}>Help</Link></div>
            </div>
            <div className='menu2'>
                <div><Link to="/login">Login/Signup</Link></div>
                <div><Link to="/admin">Admin</Link></div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar