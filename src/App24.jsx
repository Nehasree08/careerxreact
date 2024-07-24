import React from 'react'
import {useState} from "react";
import Login from './Login';
import Home from './Home';

export default function App24() {
    const[email , setEmail]=useState();
  const [password , setPassword] = useState();
    const [flag , setFlag] = useState(true)
    const validateUser =() =>{
        if (email === "John@gmail.com"  && password==="1234")
        {
          
          setFlag(false)
        }
        // else
        // {
        //   setResult("denided")
        // }
  }
    
  return (
    <div> 
        {flag ? (
            <>
             <p><input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"></input></p>
             <p><input type="password" onChange={(e) =>setPassword(e.target.value)} placeholder="Password"></input></p>
             <button onClick={validateUser}> Login</button>
        </>
        ) : <Home/>}
    </div>
  )
}
