import React from "react";
import { Link, Outlet } from "react-router-dom";

const Contact = () => {
  return (
    <div>
      <h1 className="heading">Contact Me</h1>
      <ul>
        <li><Link to="/contact/images">Images</Link></li>
        <li><Link to="/contact/price">Price</Link></li>
      </ul>
      <Outlet/>
    </div>
  );
};

export default Contact;
