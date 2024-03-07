import { Link } from "react-router-dom";

const Header = () => {
  return (
<div className="header">
    <div className="logo">AL Zaier</div>
    <div >
        <ul className="menu">
          <Link to="/" className="link"><li>Home</li></Link>
            <Link to="/registration" className="link"><li>Registration</li></Link>
            <Link to="/input" className="link"><li>Input Details</li></Link>
           <Link to="/main" className="link"><li>Main Products</li></Link> 
           <Link to="/contact" className="link"><li>Contact Me</li></Link> 
        </ul>
    </div>
</div>
  )
  
};
export default Header;
