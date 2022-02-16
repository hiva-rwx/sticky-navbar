import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropDown from "./../dropDown/DropDown";
import DropDownHover from "./../dropDownHover/DropDownHover";
import "./item.css";
const Item = ({ item, setMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const mouseEnter = (e) => {
    if (window.innerWidth > 769) {
      setIsOpen(true);
    }
  };
  const mouseLeave = () => {
    if (window.innerWidth > 769) {
      setIsOpen(false);
    }
  };
  return (
    <div className="item-list">
      <li
        className={`${item.dropDown ? "is-drop-down" : ""}`}
        onClick={() => setMenu(false)}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
      >
        <NavLink to={item.path}>{item.name}</NavLink>
        {item.dropDown && isOpen && window.innerWidth > 769 && (
          <DropDownHover items={item.dropDown} />
        )}
      </li>
      {item.dropDown && (
        <span className="arrow" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "-" : "+"}
        </span>
      )}
      {item.dropDown && isOpen && window.innerWidth < 768 && (
        <DropDown
          items={item.dropDown}
          setMenu={setMenu}
          setIsOpen={setIsOpen}
        />
      )}
    </div>
  );
};

export default Item;
