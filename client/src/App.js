import "./App.css";
import React, { useState, useEffect } from "react";
// import Main from "./components/main/Main";
import Welcome from "./components/homeP/Welcome";
// import Products from "./components/products";
import Header from "./components/Header/navbar";
import Products from "./components/products/products";
// import Button from "./components/products/Button";
// import items from "./components/products/data2.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Basket from "./components/products/Basket";
// const allCategories = ["All", ...new Set(items.map((item) => item.category))];

function App() {
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((helloRes) => {
        console.log(helloRes);
        setMenuItem(helloRes);
        setButtons(helloRes);
      });
  }, []);

  // const { products } = buttons;
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const [category, setCategory] = useState("All");
  //
  const [menuItem, setMenuItem] = useState([]);
  const [buttons, setButtons] = useState([]);

  //Filter Function
  const filter = (button) => {
    if (button === "All") {
      setMenuItem(buttons);
      return;
    }

    const filteredData = buttons.filter((item) => item.category === button);
    setMenuItem(filteredData);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route
          path="/products"
          element={
            <Products
              menuItem={menuItem}
              setMenuItem={setMenuItem}
              button={buttons}
              setButtons={setButtons}
              filter={filter}
              // products={products}
              onAdd={onAdd}
            />
          }
        />
        {/* <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}></Basket> */}
        <Route
          path="/Basket"
          element={
            <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
