import React from 'react'
import {UserContext} from './App25'
import {useContext} from 'react'
import Grandchild from './Grandchild'


export default function Child() {
    const {email , name}= useContext(UserContext)
  return (
    <div>
        This is Child Component : {email} -{name}
    </div>
  )
}
