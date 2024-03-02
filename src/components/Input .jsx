import React from 'react'
import { useState } from 'react'

const Input  = () => {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
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
        <input className='input-field' type='email' placeholder='Enter Your Email' onChange={(event)=>{
            setEmail(event.target.value)}}/>
            <h6>{email}</h6>
        <input className='input-field' type='number' placeholder='Enter Your Number' onChange={(event)=>{
            setPhone(event.target.value)}}/>
            <h6>{phone}</h6>
           
           
    </div>
   
    
    <button style={{marginLeft:"25px"}} className='btn'>Submit</button>
   
   </section>
  )
}

export default Input 