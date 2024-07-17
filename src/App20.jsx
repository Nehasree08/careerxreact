import React from 'react'
import { useState } from 'react'



export default function App20() {
    const [student , setStudent]=useState({name:"John" , age :20});
    const [students , setStudents] =useState([]);
    let total;
    students.map((student)=>(total += student.age ))
    const addStudent = () => {
        setStudents((prevStudents)=>[...prevStudents, student])

    };
    // const deleteStudent = (name)=> {
    //     setStudents(students.filter((e)=> e.name ! == name));
    // };
    
    // const editStudent = (value) => {
    //     setStudent(value)
    //     deleteStudent(value.name)
    // }


    // const sumOfAges = () => {
    //     const totalAge = students.reduce((sum, currStudent) => sum + parseInt(currStudent.age), 0);
    //     return totalAge;
    //   };
    
  return (


    <div>
        <p>
            <input type="text" 
            placeholder='EnterName' 
            onChange={(e)=>
                setStudent((prevStudent)=>(
                {...prevStudent , name:e.target.value}
            ))}></input></p>

            <p><input type="text" placeholder='Enter Age' 
        onChange={(e)=>
            setStudent((prevStudent)=>(
                {...prevStudent , age:e.target.value}
            ))}></input>
            </p>
        <p>
            <button onClick={addStudent}>Add Student</button>
        </p>
        <div>
            {student.name}-{student.age}
            {students.map((value , index)=>(
                <div key={index}>
                    {value.name}-{value.age}-{" "}
                    
                    {/* <button onClick={()=>deleteStudent(value.name)}>Delete</button>
                    <button onClick={()=>editStudent(value.name)}>Edit</button> */}
                </div>
                
               
            ))}
            {total}

            {/* {sumOfAges()} */}
        </div>
    </div>
  )
}
