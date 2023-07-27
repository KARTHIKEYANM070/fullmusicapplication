import React, { useState } from "react";
import { Link } from "react-router-dom";
import './css/loginpagera.css';
import axios from "axios";
const Signup=(props)=> {
   
        const[name,setname]=useState("");
        const[email,setemail]=useState("");
        const[password,setpassword]=useState("");
        const handleName=(e)=>{
          setname(e.target.value);
        }
        const handleEmail=(e)=>{
          setemail(e.target.value);
        }
        const handlePassword=(e)=>{
          setpassword(e.target.value);
        }
    const SubmitHandler=(e)=>{
        e.preventDefault();
        const data={
            name:name,
            email:email,
            password:password
        };
        axios.post("http://localhost:8181/api/v1/auth/register",data);
        
    }
  return (
    <div className="lkp">
    <div className="wrapper signUp">
      <div className="illustration">
        <img src="https://source.unsplash.com/random" alt="illustration" />
      </div>
      <div className="form">
        <div className="heading">CREATE AN ACCOUNT</div>
        <form onSubmit={SubmitHandler}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} id="name" placeholder="Enter your name" />
          </div>
          <div>
            <label htmlFor="name">E-Mail</label>
            <input type="text" id="name" onChange={handleEmail}  placeholder="Enter your mail" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password" onChange={handlePassword}
              id="password"
              placeholder="Enter you password"
            />
          </div>
          <button type="submit">Submit</button>
          <h2 align="center" class="or">
            OR
          </h2>
        </form>
        <p>
          Have an account ? <Link to="/Login"> Login </Link>
        </p>
      </div>
    </div>
    </div>
    
  );
}
export default Signup;