import React, { useState } from 'react';
import "../styles/login.css"
// import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom'
// import styled from 'styled-components'
// import { login } from '../Redux/CredentialReducer/action'

const Login = () => {
// const navigate = useNavigate()
 const [email,setEmail] = useState("eve.holt@reqres.in")
 const [password ,setPassword] = useState("123")
//  const dispatch = useDispatch() 
//  const {isAuth ,token} = useSelector((store)=>store.credentialReducer)
// const location = useLocation()


 const handleLogin = () => {
//     const userData = {email ,password}
//      dispatch(login(userData));
//     console.log(isAuth,token)
//    // alert("Login Successfully")
//     navigate(location.state)
 }




  return (
    <div>
    <div className='background'>
        <img width={"100%"} src="https://media.istockphoto.com/id/807903666/photo/female-phlebotomist-wraps-young-girls-arm-after-blood-draw.webp?b=1&s=170667a&w=0&k=20&c=fRgkpd8m1751UR_CxQP9vzaMs9rk8K8aOPkh80kyOFY=" alt="" />
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
            <input type="text" placeholder='Enter your email' value={email} onChange={(e)=>setEmail(e.target.value)} />
            <br />
            <label >Password</label>
            <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <br />
            <button >LogIn</button>
            <span>Don't have an account ? <Link className='log-btn' to='/login'>SignUp</Link> </span>

      </div>
    </div>
      
   
</div>
  )
}

export default Login


// const DIV = styled.div`
 
//     .background>img{
//         width: 100%;
//         height: 600px;
//         position: relative
//     }
//     .signup{
//        // border: 1px solid black;
//         width: 40%;
//         //background-color: whitesmoke;
//         background: rgba(107, 203, 241, 0.498);
//         border-radius: 10px;
//         height: 400px;
//         margin-top: 70px;
//         box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
//      transition: ease-in;
//     }
//     .signup-detail{
//         border: 1px solid black;
//         width: 48%;
//         border-radius: 40px 10px 10px 10px;
//     }
//     .signup-page{
//         position: absolute;
//         display: flex;
//         padding: 20px;
//        // border: 1px solid black;
//         width: 90%;
//         top: 7%;
//         left:5%;
//         justify-content: space-evenly;
//        // background-color : blue ;
//         background: rgba(153, 217, 243, 0.3);
//         border-radius : 90px 10px 100px 10px;
//         height: 600px;
//         box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
//     }
//    .signup>input{
//     width: 80%;
//     margin-top: 10px;
//     margin-left: 10%;
//     padding: 10px;
//     border-radius: 20px;
//     border: 0px solid black;
//    }
//    .signup>input:hover{
//     box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
//    }
//    .signup>input:focus{
//     border: 0px solid black;
//    border-bottom: 3px solid rgb(30, 136, 229);
//    outline: none;
//    -webkit-transition: 0.2s;
//     transition: 0.2s;
//    }
   
//    .signup>button{
//     border-radius: 20px;
//     background-color: #1E88E5;
//     padding: 10px 20px;
//     width: 80%;
//     margin-top: 20px;
//     margin-left: 10%;
//     margin-bottom: 30px;
//    }
//    .signup>button:hover{
//     box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
//     background-color: #105b9d;
//     color: #fefefe;
//    }
//    .signup>label{
//    font-size: large;
//    padding-left: 10%;
//    }
// .signup>h1{
//     color: rgb(30, 136, 229);
//     font-size: 30px;
//     padding-left: 20px;
// }
// .signup>h1>span{
//     color: rgb(241, 246, 249);
// }
// .signup>span{
// padding-left: 10%;
// font-size: large;
// color: #fefefe;
// }
// .log-btn{
//     color: #032f56; 
//     text-decoration: underline;
// }

// .signup-detail{
//    background: rgba(153, 217, 243, 0.3);
//    padding: 10px;
//    border: 0px solid red;
//    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
     
// }
// .signup-detail>h1{
//     color: rgb(54, 39, 39);
//     font-size: 30px;
//     padding-left: 20px;
// }
// .signup-detail>h1>span{
//     color: rgb(20, 154, 232);
// }
// .signup-detail>h1>span>span{
//     color: rgb(255, 255, 255);
// }
// .signup-detail>img{
//     opacity: 80%;
//     border-radius: 10px;
//     margin-top: 10px;
//     margin-bottom: 10px;
// }
// .signup-detail>h3{
//     color: #fefefe;
//     font-size: large;
//     text-align: left;
// }
// `