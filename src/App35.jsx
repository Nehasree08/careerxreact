import React from 'react'
import { useState  ,useEffect} from 'react';

export default function App35() {
    const[data , setData] = useState([]);
    const url ="https://jsonplaceholder.typicode.com/users"
    const fetchData = async() =>{
        try{
                const response = await fetch (url)
                const result = await response.json()
                setData(result)
        }
        catch(err){
            console.log(err)
        }
    };

    useEffect (()=>{
        fetchData(url)
    },[])

  return (
    <div>
        {data.map((element)=>(
            <div key={element.id}>{element.name}</div>
        ))}
    </div>
  )
}
//async , await