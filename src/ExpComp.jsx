import React from 'react'
import {memo} from 'react'

 function ExpComp(props) {
    console.log("ExpComponent Rendered " , props.count ,"times" )
  return (
    <div>ExpComp</div>
  )
}

export default memo(ExpComp)
//memorized