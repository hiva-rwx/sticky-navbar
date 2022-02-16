import React from "react";
import { Link } from "react-router-dom";
import "./drop-down.css";
const DropDown = ({ items, setMenu, setIsOpen }) => {
  return (
    <div className="items-drop-down">
      {items.map((item) => {
        return (
          <li
            key={item.id}
            className="item-drop-down"
            onClick={() => {
              setMenu(false);
              setIsOpen(false);
            }}
          >
            <Link to={item.path}>{item.name}</Link>
          </li>
        );
      })}
    </div>
  );
};

export default DropDown;
