import React,{useState} from 'react'

function LoginForm() {
    const [val,func]=useState({email:"",name:""})

    function handleSubmit(e){
        e.preventDefault();
        console.log("form submitted",val)

    }

    function handleChange(e){
        const {name,value}=e.target;
        func((prev)=>({
                ...prev,
                [name]:value
            })
        );
    }


  return (
    <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter email" value={val.email} onChange={handleChange}></input>
        <input type="name" name="name" placeholder="Enter name" value={val.name} onChange={handleChange}></input>
        <button>login</button>
    </form>
  )
}

export default LoginForm