import React from 'react';
import ProductForm from './ProductForm';

const NewProduct = (props) => {

    const saveProductDataHandler = enteredProductData =>{
        // console.log(enteredProductData)
        const productData={
            ...enteredProductData,
            id:Math.random().toString()
        }
        // console.log(productData)
        props.onAddProduct(productData)
    }
    return (
        <div>
            <ProductForm onSaveProductData={saveProductDataHandler}/>
        </div>
    );
};

export default NewProduct;