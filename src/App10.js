import React from 'react'
import { useState } from 'react'

export default function App10() {
    const[ email , setEmail ]= useState(0)
    const [password , setPassword] = useState(0)
    const [result , setResult]= useState()
    const validate =()=>{
        if(email==="John@gmail.com" && password==="12345")
            setResult("welcome ")
        else{
            setResult("Access Denied")
        }
    }
  return (
   
    <div>
        <h2>Login Form</h2>
        <input type="text" placeholder="email" onChange={(e)=>setEmail(e.target.value)}></input>
        <p><input type="password" placeholder="password" onChange={(e)=>setPassword(e.target.value)}></input></p>
        <button onClick={validate}>Login</button>
        <br></br>
        {result}

        {/* //retaining and reload values bcoz they are state value , in typical js html scenario we can either reload or retain  */}
    </div>
  
    
   
  )
}
