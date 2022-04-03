import './Login.css';
import React , {useState} from 'react';
import {NavLink} from "react-router-dom";

function Sign (){
    let [name,setName] = useState("");
    let [password,setPassword] = useState("");
    let [email,setEmail] = useState("");

    let nameChanged = (e)=>{
        let reg = /^[a-zA-Z ]{3,50}$/;
        if(!reg.test(e.target.value)){
            setName("Not valid name");
            e.target.style.borderColor='red';
        }else{
            setName("");
            e.target.style.borderColor='green';
        }
    }

    let passwordChanged = (e)=>{
        if(e.target.value.length < 8){
            setPassword("Not valid password");
            e.target.style.borderColor='red';
        }else{
            setPassword("");
            e.target.style.borderColor='green';
        }  
    }

    let emailChanged = (e)=>{
        if(e.target.value.indexOf("@") > 1 &&
        e.target.value.indexOf(".", e.target.value.indexOf("@")) >=
        e.target.value.indexOf("@") + 1){
            setEmail("");
            e.target.style.borderColor='green';
        }else{
            setEmail("Not valid email");
            e.target.style.borderColor='red';
        }
    }

    return (
        <form id="myForm" name="theForm" method="get" style={{backgroundColor:'#e0f1ff' , padding:'90px 0'}}>
            <div className="container">
                <h1> Sign Up </h1>
                <div className='inputRow' style={{height: '121.5px'}}>
                    <label htmlFor="name"> Name </label>
                    <input
                    required
                    style={{width:'100%',height:'50px'}}
                    placeholder="Enter your name"
                    type="text"
                    id="name"
                    name="name"
                    onChange={(e)=>{
                        nameChanged(e);
                    }}
                    /><br />
                    <span id="textSpan"> {name} </span> <br /><br />
                </div>
                <div className='inputRow'>
                    <label htmlFor="email"> Email </label>
                    <input
                    required
                    style={{width:'100%',height:'50px'}}
                    placeholder="Enter your email"
                    type="Email"
                    id="email"
                    name="email"
                    onChange={(e)=>{
                        emailChanged(e);
                    }}
                    /><br />
                    <span id="emailSpan"> {email} </span>
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
                    onChange={(e)=>{
                        passwordChanged(e);
                    }}
                    /><br />
                    <span id="passSpan">
                    {password}
                    </span>
                </div>
                <div className='inputRow'>
                    <label htmlFor="password"> Confirm Password </label>
                    <input
                    required
                    style={{width:'100%',height:'50px'}}
                    placeholder="Enter your password again"
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e)=>{
                        passwordChanged(e);
                    }}
                    /><br />
                    <span id="passSpan">
                    {password}
                    </span>
                </div>
                <h6 className='mx-5 my-4'>By signing up you accept our <span style={{color:'#1b9bcf'}}>Terms Of Use</span> </h6> 
                <button type="submit" id="sub" >
                    Sign Up
                </button>
                <h6 className='mx-5 mt-5'>Have account ? <NavLink to="/login" className="fw-bold" style={{color:'#1b9bcf'}}>Login here</NavLink> </h6> 
            </div>
        </form>
    )
}

export default Sign;