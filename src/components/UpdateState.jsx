import React, { useState } from "react";

const UpdateState = () => {

  let arr=[34,54,23,67,65]
  let arr2= [...arr,46,57,89999]
  arr[2]=100
  
  console.log(arr)
  console.log("array 1")
  console.log( arr2)

  const [name, setName] = useState("Sana");
  const [myName,setMyName]=useState("Sana")
  const [animals, setAnimals] = useState(["Lion", "Cheetha", "Hyna", "jaguar"]);


  function Addanimal(){
    let copyAnimals=[...animals];
    copyAnimals.push("Deer");
    console.log(animals)
    setAnimals(copyAnimals)
  }
  function addnewname(){
    setMyName((value)=>{
      return value+"Hasi"
    })
  }
  return (
    <div>
      <div className="heading">
        <h4>Updating state with array and objects</h4>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h2 className="color">{name}</h2>
        <button
          className="btn"
          onClick={() => {
            setName("Hasi");
          }}
        >
          Click Me
        </button>
          <h2 style={{color:"green"}}>{myName}</h2>
        <button onClick={addnewname} className="btn">Add New Name</button>
      </div>

      <div style={{ display: "flex",flexDirection:"column",alignItems:"center"}}>
        {animals.map((animal, index) => {
          return (
            <div key={index}>
              <h2>
                {animal}
                <br />
              </h2>
            </div>
          );
        })}
        <button className="btn" onClick={Addanimal}>Add Animal</button>
      </div>
    </div>
  );
};

export default UpdateState;
