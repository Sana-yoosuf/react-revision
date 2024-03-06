import React, { useState } from 'react'

const Registration = () => {
    const [details,setDetails]=useState({})
    function handleForm(event){
        setDetails((prevobj)=>{
            return{...prevobj,[event.target.name]:event.target.value}
        })
    }

    function handleSubmit(){
        console.log({details})
    }
  return (
    <div>
        <div>
            <input type='text'name='name' placeholder='Name' onChange={handleForm}/>
            <input type='email' name='email' placeholder='Email' onChange={handleForm}/>
            <button onClick={handleSubmit}>Register</button>
            
            

        </div>
    </div>
  )
}

export default Registration