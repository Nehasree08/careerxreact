import React from 'react'
import { useReducer } from 'react' 

function reducer(state , action){
    switch(action.type){
    case "increment":
        return {count:state.count+1}

    case "decrement":
        return {count : state.count-1};
    default :
    return{count :state}
    }
//logic is written outside the component 
}


export default function App38() {
    const [state , dispatch] = useReducer(reducer , {count :0});
    // count [count , setCount] = useState(0)
    function decrement () {
        dispatch ({type :"decrement"});
    }
    function increment (){
        dispatch({type : "increment"});
    }
  return (
    <div>
        <button onClick={decrement}>-</button>
        { state.count}
        <button onClick={increment}>+</button>
    </div>
  )
}


//easy writing 
// state var are used inside only they cant be used outside