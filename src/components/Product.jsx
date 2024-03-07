import { useState } from "react";

const Product = (props) => {
  const [available, setAvailable] = useState("Now available");
  function btnClick(data) {
    console.log("Item added to cart" + data);
  }
  function setAvailableProduct() {
    setAvailable("No Stock");
    console.log("Sorry..Product out of stock");
  }

  return (
    <div>
      <div className="product">
        <img src={props.url} alt="product-image" />
        <div>
          <h3>{props.name}</h3>
        <p>{props.price}</p>
        </div>
      </div>
      <button
        className="btn"
        onClick={(event) => {
          console.log(event);
          btnClick("confirm");
        }}
      >
        Clickme
      </button>
      <button className="btn" onClick={setAvailableProduct}>
        Buy Me
      </button>
      <p>{available}</p>
    </div>
  );
};
export default Product;
