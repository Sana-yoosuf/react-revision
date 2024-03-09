import React, { useContext } from "react";
import Conchild from "./Conchild";
import { NameContext } from "../App";

const ContextChild = () => {
    let user=useContext(NameContext)
  return (
    <div className="conchild">
      <h3 >Hasi bro is {user}'s best friend</h3>
      <Conchild/>
    </div>
  );
};

export default ContextChild;
