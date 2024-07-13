import React from 'react'
import { useState } from 'react'

export default function() {
    const[value , setValue]=useState(0)
    //first is the var  nd second is the function and function return the value 
    const[ result , setResult]= useState(0)
    const calc=()=>{
        setResult(value*value)
    }
  return (
    <div>
        <input type="text" onChange={(e)=>setValue(e.target.value)}></input>
        <button onClick={calc} >Submit</button>
        <hr></hr>
        You have entered {value} and result is {result}
    
    </div>
  )
}
