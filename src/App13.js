import React from 'react'
import Login from './Login';
import Home from './Home';

export default function App13(props) {
  
   if(props.flag=== true)
   {
        
        return <Login/>;
        
   }
    else if(email==="John@gmail.com" && password==="12345")
    {
        return <Home/>;
    }
    else{
       return <div>Access Denied</div>;

    }
  
}
