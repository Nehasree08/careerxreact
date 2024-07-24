import React from 'react'
import { useEffect  , useState} from 'react'
import { useNavigate } from 'react-router-dom';


export default function About() {
  const [count , setCount] = useState(0);
  const Navigate = useNavigate()
  const increment = () => {
    setCount (count+1)
    console.log("Componenet updated")
  }

  const goToLogin =() =>{
    Navigate('/log')
  }

  useEffect (()=>
    {console.log("About component mounted");
      //any code runs first time when it mounts
    return()=>{
      console.log("Component unmounted");
      //function/ action  only when unmounts , like database or wtever to clear 
    };
   } ,[]);
   //[count] everything will be retruned
    return(
    <div>
        <button onClick={increment}>Click{count}</button>
        <p><button onClick={goToLogin}>Login</button></p>
    </div>
    );
  
}

// mount , update , unmount - lifecycle of jsx