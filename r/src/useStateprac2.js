import React, { useState } from 'react'

function UseStateprac2() {
    const [val,func]=useState("");
    const [val2,func2]=useState("");
    function handleChange(e){
        const {value}=e.target;
        func2(value)
        func(value)

    }
  return (
    <div>
        <input id="inp1" name='box1' value={val} onChange={handleChange}>
        </input>

        <input id="inp2" name="box2" value={val2} onChange={handleChange}>
        </input>
    </div>
   
  )
}

export default UseStateprac2