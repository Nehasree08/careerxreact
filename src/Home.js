import { useContext } from 'react'
import React from 'react'
import { UserContext } from './App25'


export default function Home() {
  const {email , name} = useContext(UserContext)
  return (
    <div>
        Welcome {email}- {name}
    </div>
  )
}
