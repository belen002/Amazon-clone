import React from 'react'
import classes from "./Heade.module.css";
import { CiMenuBurger } from "react-icons/ci";
function LowerHeader() {
  return (
    <div className={classes.lower_container}>
      <ul>
        <li>
          <CiMenuBurger/>
          <p>All</p>
        </li>
        <li>Today's deal</li>
        <li>Consumer Service</li>
        <li>Register</li>
        <li>Gift Cards</li>
        <li>Sell</li>
      </ul>
    </div>
  );
}

export default LowerHeader