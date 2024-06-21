import React from "react";
import './NewProduct.css';
import ProductForm from "./ProductForm";

const NewProduct = (props) => {

    function saveProduct(product){
        console.log("I am inside new product");
        console.log(product);

        // calling parent function
        props.printData(product);
    }

    return(
        <div className="new-product">
            <ProductForm saveNewProduct = {saveProduct} />
        </div>
    );
}

export default NewProduct;