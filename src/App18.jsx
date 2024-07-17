import React from 'react'

export default function App18() {
    const arr1 =[1 ,2 ,4];
    const arr2= [6 , 7  ,8];
    const obj1= { name: "John"};
    const obj2={age:30};
    // const student ={...obj1 , ...obj2};
    const newArr = [...arr1, ...arr2];

    const student = {...obj1 , city:'dubai'}

    console.log(student)

  return (
    <div>{newArr}</div>
  )
}
