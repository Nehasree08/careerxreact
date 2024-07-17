import React from 'react'
import {BrowserRouter as Router , Routes , Link , Route} from 'react-router-dom'; 
import Home from './Home';
import About from './About';
import Contact from './Contact';
// import {}  from "react-icons/fa"


export default function App22() {
  return (
    <div>
        <Router>
            <p>
                <Link to="/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
            </p>
            <Routes>
                <Route index element ={<Home />}/>
                <Route path ="/home" element={<Home/>}/>
                <Route path ="/about" element={<About/>}/>
                <Route path ="/contact" element ={<Contact/>}/>
    
                
            </Routes>
        </Router>
    </div>
  )
}
