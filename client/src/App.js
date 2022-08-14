import "./App.css";
import React, { useState, useEffect } from "react";
import Welcome from "./components/HomeP/Welcome";
import Header from "./components/Header/navbar";
import Products from "./components/Products/products";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Basket from "./components/Products/Basket";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((helloRes) => {
        console.log(helloRes);
        setMenuItem(helloRes);
        setButtons(helloRes);
      });
  }, []);

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
              onAdd={onAdd}
            />
          }
        />
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
