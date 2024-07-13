import React from 'react'
import { useState } from 'react'

export default function App7() {
    const [count ,setCount] = useState(0) //default number 0
  return (
    <div>
        <button onClick={()=>setCount(count-1)}>-</button>
        {count}
        <button onClick={()=>setCount(count+1)}>+</button> 
        {/* components reloads everytime it increments or decrements and prints the current value */}
    </div>
  )
}
