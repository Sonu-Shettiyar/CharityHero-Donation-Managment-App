import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/signup.css"

const SignUp = () => {
  
  



  return (
   <div className='cont'>
        <div className='background'>
            <img width={"100%"} src="https://images.unsplash.com/photo-1536856136534-bb679c52a9aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzd8fGRvbmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" alt="" />
        </div>
        
        <div className='signup-page'>
            <div className='signup-detail'>
             <h1>Give your hand to make a change <br /> <span>CHARITY <span> HERO</span></span></h1>
             <img width={"100%"} src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=870&q=80" alt="" />
             <h3>
                Create your account today and raise fund <br/>and bring the change in others life<br/> with the CharityHero support !
             </h3>
            </div>
            <div className='signup'>
                <h1>Charity<span>Hero</span>  <span> SignUp</span></h1>
                
                <br />
                <label >Username</label>
                <input type="text" placeholder='Enter your email'/>
                <br />
                <label >Password</label>
                <input type="password" placeholder='Password' />
                <br />
                <button>Sign Up</button>
                <span>Already have an account ? <Link className='log-btn' to='/login'>Login</Link> </span>

          </div>
         </div>
        </div>
  )
}

export default SignUp
