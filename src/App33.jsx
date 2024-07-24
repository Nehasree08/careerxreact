import React from 'react'
import { useRef } from 'react'

export default function App33() {
    console.log("Re - rendered")
    const h1Ref = useRef(null)
    const updateH1 = () =>{
        
        h1Ref.current.textContent="Good Evening";
    };
  return (
    <div>
        <h1 ref={h1Ref}> GoodMorning</h1>
        <button onClick={updateH1}>Click</button>
    </div>
  )
}
