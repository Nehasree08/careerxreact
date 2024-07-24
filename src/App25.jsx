import React , { useContext , useState , createContext  } from 'react';
import Child from "./Child"
import Home from './Home';
import Grandchild from './Grandchild';

export const UserContext = createContext()
export default function App25() {
    const [email , setEmail] = useState("john@gmail.com");
    const [name , setName] = useState("Jone");


  return (
    <div>
      This is App25 Component :{email}
   

      <UserContext.Provider value ={{email , name}}>
      <Child/>
      <Home/>
      </UserContext.Provider>
    
    </div>
  )
}

// userContext is not a keyword its a variable