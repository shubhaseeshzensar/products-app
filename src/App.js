import "./App.css";
import NewProduct from "./components/NewProduct";
import Products from "./components/Products";
import { useState } from "react";

const INITIAL_PRODUCTS = [
  {
    id: "p1",
    name: "Bread",
    price: 89.0,
    description: "White Bread with no added sugar.",
  },
  {
    id: "p2",
    name: "Milk",
    price: 50.0,
    description: "Gujarat Dairy Cow Milk.",
  },
];

const App = () => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  const onAddProductHandler = (product) => {
    setProducts((prevState) => {
      return [product, ...prevState];
    });
    console.log("I am in app.js");
    console.log(product);
  };
  return (
    <div className="container">
      <NewProduct onAddProduct={onAddProductHandler} />
      <nav className="navbar navbar-light bg-primary text-white text-center mt-4">
        <p>List Of Products At S.K. Grocers.</p>
      </nav>
      <Products products={products} />
    </div>
  );
};

export default App;
