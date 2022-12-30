import React from "react";
import classes from "./Card.module.css";

// props children = passing down the what are in the props component

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
