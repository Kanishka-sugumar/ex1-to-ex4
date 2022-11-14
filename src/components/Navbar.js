import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";
//import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <h1 style={{ backgroundImage: `url(${Logo})` }}>RPI</h1>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
          <Link to="/Register">Signup</Link>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9yJAuhq9xWLVQep-Bdyld2fzKYI6JWyX-w&usqp=CAU" alt=""/>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Boxes </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/auth">Signup</Link>
        <img class="cart" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH9yJAuhq9xWLVQep-Bdyld2fzKYI6JWyX-w&usqp=CAU" alt=""/>
        <button onClick={toggleNavbar}>
          {/*<ReorderIcon />*/}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
