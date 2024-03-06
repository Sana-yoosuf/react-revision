import React, { useState } from "react";

const Formhandling = () => {
  const [details, setDetails] = useState({});
 
function handleInput(event){
  setDetails((prevObj)=>{
    return {...prevObj,[event.target.name]:event.target.value}
  })

  
}

function handleSubmit(){
  console.log({details})
}
  


  return (
    <div>
      <div className="heading">
        <h4>Form Handling</h4>
      </div>
      <div className="input-box input">
        
        <input
          className="input-field"
          type="text"
          onChange={handleInput}
          placeholder="Enter yoyr Name"
          name="name"
        />
        
        <input
          className="input-field"
          type="email"
          placeholder="Enter your Email"
          onChange={handleInput}
          name="email"
        />
        <button className="btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Formhandling;
