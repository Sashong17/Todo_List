import React, { useState } from 'react'

const Inputarea = ({additems}) => {

const [input,setInput]=useState("")

function handlechange(event){
    setInput(event.target.value)
}
console.log(input);

function handleAdd(){
    if(input===" "){
        alert("please enter...")
    return
    }
    additems(input)
    setInput("")
}

  return (
    <div classname='inputfield'> 
    <input type='text' placeholder = 'ADD ?' value={input} onChange={handlechange}/>
    <button onClick={handleAdd}>+</button>
    </div>
  )
}

export default Inputarea