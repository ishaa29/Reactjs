import React,{ useEffect} from 'react'
import { useState } from 'react'
const Useefeect = () => {
    let[count,SetCount]=useState(0)
    let[city,SetCity]=useState('city')
    useEffect(()=>{
        console.log('hellooo');
        
    },[count])
    
    function A(){
        SetCount(count+1)

    }
    function B(){
        SetCity('Bhopal')
    }
  return (
    <div>
        <p>{count}</p>
        <p>{city}</p>
      <button onClick={A}>click</button>
      <button onClick={B}>cityyy</button>
   
    </div>
  )
}

export default Useefeect
