import React, { useState } from "react";

const UpdateState = () => {
  const [name, setName] = useState("sana");
  const [animals, setAnimals] = useState(["Lion", "Cheetha", "Hyna", "jaguar"]);


  function Addanimal(){
    let copyAnimals=[...animals];
    copyAnimals.push("Deer");
    console.log(animals)
    setAnimals(copyAnimals)
  

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
