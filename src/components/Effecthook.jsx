import React, { useEffect, useState } from "react";

const Effecthook = () => {
  const[users,setUsers]=useState([])



  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUsers(data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
<div className="main">
  {
    users.map((user)=>{
      return(
        <div className="user" key={user.id}>
          
          <h1>{user.id}.{user.name}</h1>
          <p>{user.username}</p>
          <p>{user.website}</p>
        </div>
      )
    })
  }
</div>
  )
  
};

export default Effecthook;
