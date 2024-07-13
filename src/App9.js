import React from 'react'
import { useState } from 'react'




export default function App9() {
    const[length , setLnegth]= useState(0)
    const [breadth , setBreadth] = useState(0)
    const [area, setArea] = useState(0)
    const calc=() => {
        setArea(length*breadth)
    }
  return (
    <div>
    <p>
        <input type="text" onChange={(e)=>setLnegth(e.target.value)}></input></p>
        <p><input type="text"  onChange={(e)=>setBreadth(e.target.value)}></input></p>
        <p><button onClick={calc}>Find Area</button></p>
        Area is : {area}
    </div>
  )
}
