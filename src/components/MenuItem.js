import React from "react";
import './MenuList.css';

function MenuItem({ image, name, price }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <center><h1 className="head"> {name} </h1>
      <p> Rs.{price} </p>
      <button clas="button">Add to cart<i class="fa fa-shopping-cart"></i></button></center>
    </div>
  );
}

export default MenuItem;