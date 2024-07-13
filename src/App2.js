import React from 'react'
import "./App2.css"

export default function App2(props) { //properties
    let city='Hyd' // this properties are restricted to this component only like local variable
    let a= 10 
    let b=8
  return (
    <div className='App2'>
        <h1>Hi {props.name} Welcome to MyStore</h1>
        <p className="txtStyle"> lorem sdfghj
            Age:{props.age},{city}
            <br></br>
            Sum:{a+b}
        </p>
       
    </div>
   
  )
}
