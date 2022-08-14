import React from "react";
import { useEffect, useState } from "react";
import "./products.css";
import "./Button.css";

function Products({
  menuItem,
  filters,
  filter,
  onAdd,
  setFilters,
  setMenuItem,
}) {
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setMenuItem(data);
        setFilters(data);
      });
  }, []);

  const allCategories = [
    "All",
    ...new Set(filters.map((item) => item.category)),
  ];
  return (
    <div>
      <div className="buttons">
        {allCategories.map((cat, i) => {
          return (
            <button type="button" onClick={() => filter(cat)} className="btn">
              {cat}
            </button>
          );
        })}
      </div>

      {menuItem.map((props, i) => {
        return (
          <div className="main" key={i}>
            <div>
              <h3 className="title">{props.title}</h3>
              <img src={props.image} width={210} height={150}></img>
              <h4 className="price">price : {props.price}$</h4>
              <div className="button" onClick={() => onAdd(props)}>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
