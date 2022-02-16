import React from "react";
import { Link } from "react-router-dom";
import "./drop-down-hover.css";
const DropDownHover = ({ items }) => {
  return (
    <ul className="drop-down-menu">
      {items.map((item) => {
        return (
          <li key={item.id}>
            <Link to={item.path}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default DropDownHover;
