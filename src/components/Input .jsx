import React from 'react'
import { useState } from 'react'

const Input  = () => {
    const [name,setName]=useState("")
  return (
   <section>
    <div className='input'>
        <h4>Confirm Your Order</h4>

    </div>
    <div className='input-box input'>
        
        <input className='input-field' type='text' placeholder='Enter Your Name' onChange={(event)=>{
            setName(event.target.value)
        }}/>
        <h6>{name}</h6>
        <input className='input-field' type='email' placeholder='Enter Your Email'/>
        <input className='input-field' type='number' placeholder='Enter Your Number'/>
       
    </div>
   </section>
  )
}

export default Input 