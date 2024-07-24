import React from 'react'
import {BrowserRouter as Router , Routes , Link , Route} from 'react-router-dom'; 
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Log from './Log';



export default function App22() {
  return (
    <div>
        <Router>
            <p>
                <Link to="/home">Home</Link> | <Link to="/about">About</Link> | <Link to="/contact">Contact</Link> |<Link to="/log">Login</Link>
            </p>
            <Routes>
                <Route index element ={<Home />}/>
                <Route path ="/home" element={<Home/>}/>
                <Route path ="/about" element={<About/>}/> 
                
                
                
                {/* mount and unmount */}

                {/* mounting updating unmounting - lifecycle of jsx */}
                <Route path ="/contact" element ={<Contact/>}/>
                <Route path ="/log" element={<Log/>}/> 
    
                
            </Routes>
        </Router>
    </div>
  )
}
