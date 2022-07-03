import React, { useState } from "react";

const ProductForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredProductName: "",
    enteredProductDescription: "",
    enteredProductPrice: "",
  });

  const productNameChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredProductName: event.target.value };
    });
  };

  const productDescriptionChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredProductDescription: event.target.value };
    });
  };

  const productPriceChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredProductPrice: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const userInputData = {
      name: userInput.enteredProductName,
      description: userInput.enteredProductDescription,
      price: userInput.enteredProductPrice,
    };

    props.onSaveProductData(userInputData);
    // console.log(userInputData);

    setUserInput(() => {
      return {
        enteredProductDescription: "",
        enteredProductName: "",
        enteredProductPrice: "",
      };
    });
  };
  return (
    <form
      onSubmit={submitHandler}
      className="form-horizontal border border-info mt-4 text-justify rounded"
    >
      <div className="form-group">
        <label>Product Name</label>
        <input
          value={userInput.enteredProductName}
          type="text"
          onChange={productNameChangeHandler}
          className="form-control bg-light text-dark"
        />
      </div>
      <div className="form-group">
        <label>Product Description</label>
        <input
          type="text"
          value={userInput.enteredProductDescription}
          onChange={productDescriptionChangeHandler}
          className="form-control bg-light text-dark"
        />
      </div>
      <div>
        <label>Product Price</label>
        <input
          type="number"
          value={userInput.enteredProductPrice}
          min="0.5"
          step="0.5"
          onChange={productPriceChangeHandler}
          className="form-control bg-light text-dark"
        />
      </div>
      <div>
        <button
          className="btn btn-outline-success w-100 text-yellow"
          type="submit"
        >
          Add New Product
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
