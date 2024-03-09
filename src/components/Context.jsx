import React from "react";
import ContextChild from "./ContextChild";
import { NameContext } from "../App";
import { useContext } from "react";

const Context = () => {

    let user=useContext(NameContext)
  return(

  
  <div className="context">
    <h1>{user} is Hasi bro's Best Buddy</h1>
    <ContextChild/>
  </div>
  )
};

export default Context;

// Context API healps to create a global container in which we can share
//  data, so that every component can use that

// you can only pass one value as usecontext provider parameter. 
// so if there is more than one value pass it as object
