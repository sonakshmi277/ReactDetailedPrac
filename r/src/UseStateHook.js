import React,{useState} from 'react'

function UseStateHook() {
    const [count,setCount]=useState(0);
  return (
    <div>
        <h1 style={{color:"white"}}>You clicked {count} times</h1>
        <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
}

export default UseStateHook;