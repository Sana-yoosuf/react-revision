import React from "react";

const Mapping = () => {
  let products = [
    {
      id: 1,
      name: "Mobile",
      Price: "2000aed",
    },
    {
      id: 2,
      name: "ear phone",
      Price: "100aed",
    },
    {
      id: 3,
      name: "Tab",
      Price: "3500aed",
    },
    {
      id: 4,
      name: "laptop",
      Price: "3450aed",
    },
    {
      id: 5,
      name: "Cooling glass",
      Price: "150aed",
    },
    {
      id: 6,
      name: "TV",
      Price: "5500aed",
    },
    {
      id: 7,
      name: "IWatch",
      Price: "1500aed",
    },
    {
      id: 8,
      name: "earpod",
      Price: "650aed",
    },
  ];
  return (
    <div>
      <div className="input">
        <h4>Our main products</h4>
      </div>

<div className="main">

{products.map((product) => {
        return (
          
            <div className="data" key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.Price}</p>
            </div>
         
        );
      })}
</div>
      
    </div>
  );
};

export default Mapping;
