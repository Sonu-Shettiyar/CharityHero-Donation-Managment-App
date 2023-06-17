import React, { useState } from 'react';
import "../styles/login.css"
// import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
// import styled from 'styled-components'
// import { login } from '../Redux/CredentialReducer/action'

const Login = () => {
// const navigate = useNavigate()
 const [email,setEmail] = useState("")
 const [password ,setPassword] = useState("")
//  const dispatch = useDispatch() 
//  const {isAuth ,token} = useSelector((store)=>store.credentialReducer)
const location = useLocation()


 const handleLogin = () => {
    const userData = {email ,password}
     
    navigate(location.state)
 }




  return (
    <div>
    <div className='background'>
        <img width={"100%"} src="https://plus.unsplash.com/premium_photo-1661963873162-5028faa8ce36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
    </div>
    
    <div className='signup-page'>
        <div className='signup-detail'>
         <h1>Give Your life to charity<br /> <span>Charity <span>Hero</span></span></h1>
         <img width={"100%"} src="https://media.istockphoto.com/id/1353332258/photo/donation-concept-the-volunteer-giving-a-donate-box-to-the-recipient-standing-against-the-wall.webp?b=1&s=170667a&w=0&k=20&c=D53dy4HPlfLi9yCO8ouowIn9HqIWfkjEx4-C05B8TYU=" alt="" />
         <h3>
            Login to become the hero of others life<br/>to study in the dream universities  <br/> with the career mantra's support !
         </h3>
        </div>
        <div className='signup'>
            <h1>Charity<span>Hero</span>  <span> Login</span></h1>
            
            <br />
            <label >Username</label>
            <input type="text" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
            <br />
            <label >Password</label>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required />
            <br />
            <button >LogIn</button>
            <span>Don't have an account ? <Link className='log-btn' to='/signup'>SignUp</Link> </span>

      </div>
    </div>
      
   
</div>
  )
}

export default Login


