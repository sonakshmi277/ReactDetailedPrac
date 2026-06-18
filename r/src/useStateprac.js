import React,{useState} from 'react'

function UseStateprac() {
    const [name_var,func]=useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("Form is submitted",name_var);
    }

    function handleChange(e){
        const {name,value}=e.target;
        func(
            (prev)=>({
                ...prev,
                [name]:value
            }))
    }
    return (
    <form>
        <input name="name" placeholder='Enter your name' value={name_var} onChange={handleChange}></input>
        <button style={{backgroundColor:"white",color:"yellow"}}onClick={handleSubmit}>Submit</button>
    </form>
  )
}

export default UseStateprac