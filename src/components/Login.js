import './Login.css';
import React , {useState,useEffect} from 'react';
import {NavLink ,useNavigate} from "react-router-dom";
import axios from "axios";
function Login (){
    let [password,setPassword] = useState("");
    let [email,setEmail] = useState("");
    let navigate = useNavigate();
    let navigatehome = ()=>{
        navigate('/home');
      }
    const data = { email:email,password:password};
    console.log(data);
   
        let formhandeler  = async (e) => {
                e.preventDefault();
                try {
                  let res = await fetch("/api/users/login", {
                    method: "POST",
                    headers:{ "Content-Type" : "application/json"},
                    body: JSON.stringify({
                      email: email,
                      password:password,
                    }),
                  });
                  let resJson = await res.json();
                  localStorage.setItem('token',JSON.stringify(resJson) );
                  console.log(  localStorage.setItem('token',JSON.stringify(resJson) ));
                  if (res.status === 200) {
                    setEmail("");
                    setPassword("");
                    alert(' successfully login');
                  } else {
                    alert('Something went wrong')
                  }
                } catch (err) {
                  console.log(err);
                }
                navigatehome();
              };

    return (
        <form id="myForm" name="theForm" method="get"  onSubmit={formhandeler}
        style={{backgroundColor:'#e9ffff' , padding:'90px 0'}} >
            <div className="container">
                <h1> Login </h1>
                <div className='inputRow'>
                    <label htmlFor="email"> Email </label>
                    <input
                    required
                    style={{width:'100%',height:'50px'}}
                    placeholder="Enter your email"
                    type="Email"
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)
                    }
                    /><br />
                </div>
                <div className='inputRow'>
                    <label htmlFor="password"> Password </label>
                    <input
                    required
                    style={{width:'100%',height:'50px'}}
                    placeholder="Enter your password"
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)
                    }
                    /><br />
                    
                </div>
                <h6 className='mx-5 my-4'>By signing up you accept our <span style={{color:'#0da8a7'}}>Terms Of Use</span> </h6> 
                <button type="submit" id="sub"  >
                    Login
                </button>
                <h6 className='mx-5 mt-5'>Don't have account ? <NavLink to="/sign" className="fw-bold" style={{color:'#0da8a7'}}>Sign Up here</NavLink> </h6> 
            </div>
        </form>
    )
}

export default Login;