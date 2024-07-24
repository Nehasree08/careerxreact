import React from 'react'
import { useRef } from 'react'

export default function App31() {
    const divRef = useRef()
    const changeColor =() =>{
        divRef.current.style.backgroundColor ="pink"
    }
  return (
    <div ref={divRef}>
        <p>Hello! Welcome to Mars</p>
        <button onClick={changeColor}>Click</button>

    </div>
  )
}
//useRef css