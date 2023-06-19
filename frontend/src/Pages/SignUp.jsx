import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../styles/signup.css"
import axios from "axios"

const SignUp = () => {
  const navigate = useNavigate()
  const [name ,setName] = useState("");
  const [email ,setEmail] = useState("");
  const [password ,setPassword] = useState("");
  const [number ,setNumber] = useState("");


  const handleSignup = (e) => {
    e.preventDefault();
 
    const details = {name,email,password,mobile:number}
    
    fetch('https://gifted-mittens-fly.cyclic.app/users/register', {
      method: 'post',
      body: JSON.stringify(details),
      headers: {'Content-Type': 'application/json'}
    }).then(res=>res.json())
    .then(res => {
      if(res.status==200){
        alert("New User Has been Added")
        navigate(location.state)
        console.log(res);
      }else{
        alert(res.error)
      }
     
    })
    .catch(err=> alert(err))
  }



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
            <form className='signup'>
                <h1>Charity<span>Hero</span>  <span> SignUp</span></h1>
                
                <br />
                <input type="text" placeholder='Enter your Name'  onChange={(e)=>setName(e.target.value)} required/>
                <br />
                <input type="number" placeholder='Enter your Mobile Number'  onChange={(e)=>setNumber(e.target.value)} required/>
                <br />
                <input type="email" placeholder='Enter your email'  onChange={(e)=>setEmail(e.target.value)} required/>
                <br />
                <input type="password" placeholder='Password'  onChange={(e)=>setPassword(e.target.value)} required/>
                <br />
                <button onSubmit={handleSignup}>Sign Up</button>
                <span>Already have an account ? <Link className='log-btn' to='/login'>Login</Link> </span>

          </form>
         </div>
        </div>
  )
}

export default SignUp
