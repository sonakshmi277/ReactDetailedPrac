import React, { useEffect,useState } from 'react'

function UseEffect() {
    const [ct,setCount]=useState(0);
    const [tot,setTotal]=useState(1);

    function handleTotal(){
        setTotal(tot+1);
    }

    function handleCount(){
        setCount(ct+1);
    }
    //variation 1
    /*  useEffect(()=>{
                alert("I will run on each render")
            })
        
            //variation 2
            useEffect(()=>{
                alert("I will run only on 1st render")
            },[])
        
            //variation 3
            useEffect(()=>{
                alert("I will run every time count is updates")
            },[count])
        */
    //variation 4
    useEffect(() => {
        alert("I will run every time when count/total is updated")
    }, [ct, tot])
    return (
        <div>
            <button onClick={handleCount} style={{color:"black",backgroundColor:"yellow"}}>Click me to increase count</button>
            <h1 style={{color:'white'}}>Current value of count is {ct}</h1>
        
            <button onClick={handleTotal} style={{color:"black",backgroundColor:"yellow"}}>Click me to increase total</button>
            <h1 style={{color:'white'}}>Current value of count is {tot}</h1>
        </div>
    )
}

export default UseEffect