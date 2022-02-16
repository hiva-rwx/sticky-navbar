import React, { Fragment } from "react";
import { Route, Routes } from "react-router";
import "./app.css";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/About";
import Content from "./pages/Content";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <div className={"container"}>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/products"} element={<Products />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/content"} element={<Content />} />
          <Route path={"/products/:id"} element={<Product />} />
        </Routes>
      </div>
    </Fragment>
  );
};

export default App;
