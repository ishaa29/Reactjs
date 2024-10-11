import React, { useEffect, useState } from 'react'

const Data = () => {
    let [data,setdata]=useState([])
useEffect(()=>{
    fetch('http://dummyjson.com/recipes').then((res)=>{
return res.json()

    }).then((data)=>{
   console.log(data);
   setdata(data.recipes)
   
    })
})
  return (
    <div>
        {data.map((a,b,c)=>{
          console.log(a.name,'helloo');
          return(<div id='card'>
          <img height='150px' src={a.image}  />
            <p>{a.name}</p> 
          </div>)
        })}          
    </div>
  )
}

export default Data
