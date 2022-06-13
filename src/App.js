import "./App.css";
import React from "react";
import NavBar from "./components/nav-bar";
import ProductList from "./components/product-list";
import Footer from "./components/footer";

function App() {
  const product = [
    {
      price: 99999,
      name: "Iphone 10s Max",
      quantity: 0,
    },
    {
      price: 99999,
      name: "realme 10s Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "opp0 10 pro",
      quantity: 1,
    },
    {
      price: 99999,
      name: "redmi 10s Max",
      quantity: 0,
    },
  ];
  return (
    <React.Fragment>
      <NavBar />
      <ProductList  product ={product}/>
      <Footer />
    </React.Fragment>
  );
}

export default App;
