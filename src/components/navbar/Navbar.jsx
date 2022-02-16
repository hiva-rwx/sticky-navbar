import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Item from "./../itemDropDown/Item";
import { list } from "./../../data/data";
import "./navbar.css";
const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    let scroll1 = window.pageYOffset;
    window.addEventListener("scroll", () => {
      let scroll2 = window.pageYOffset;
      if (scroll1 > scroll2) {
        ref.current.style.top = "0";
      } else {
        ref.current.style.top = "-60px";
      }
      scroll1 = scroll2;
    });
  }, []);

  return (
    <nav className="nav" ref={ref}>
      <div className="nav-icon">
        <div
          className={`menu ${menu && "close"}`}
          onClick={() => setMenu(!menu)}
        >
          <span className="item-menu"></span>
          <span className="item-menu"></span>
          <span className="item-menu"></span>
        </div>
      </div>

      <div className={`list ${menu ? "show" : ""}`}>
        <ul>
          {list.map((item) => {
            return <Item item={item} key={item.id} setMenu={setMenu} />;
          })}
        </ul>
      </div>

      <div className="logo">
        <h2>
          <Link to={"/"}>Logo</Link>
        </h2>
      </div>
    </nav>
  );
};

export default Navbar;
