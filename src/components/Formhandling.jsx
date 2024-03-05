import React, { useState } from "react";

const Formhandling = () => {
  const [name, setName] = useState("Sana");
  const [email, setEmail] = useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value)
  }
  return (
    <div>
      <div className="heading">
        <h4>Form Handling</h4>
      </div>
      <div className="input-box input">
        <h3>{name}</h3>
        <input
          className="input-field"
          type="text"
          onChange={handleName}
          placeholder="Enter yoyr Name"
          value={name}
        />
        <p>{email}</p>
        <input
          className="input-field"
          type="email"
          placeholder="Enter your Email"
          onChange={handleEmail}
        />
      </div>
    </div>
  );
};

export default Formhandling;
