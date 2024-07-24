import React from 'react'
import { useState } from 'react'
import Home from './Home';

export default function Login() {
  const[email , setEmail]=useState();
  const [password , setPassword] = useState();
  const [result , setResult] = useState();

  const validateUser =() =>{
        if (email === "John@gmail.com"  && password==="1234")
        {
          
          setResult(<Home/>)
        }
        else
        {
          setResult("denided")
        }
  }
  return (
    <div>
    <p><input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Email"></input></p>
    <p><input type="password" onChange={(e) =>setPassword(e.target.value)} placeholder="Password"></input></p>
    <button onClick={validateUser}> Login</button>
    </div>
  )
}
