import React, { useState } from "react";

import './ProductItem.css';
import Cards from "./Cards";
import ProductDate from "./ProductDate";

const ProductItem = (props) => {
    
    const [title, setTitle] = useState(props.title);

    function clickHandler(){
        //title = "popcorn";
        setTitle("Popcorn")
        console.log("button clicked");
    }

    return (
        <Cards className='product-item'>
            <ProductDate date = {props.date} />
            <div className='product-item__description'>
                <h2>{title}</h2>
            </div>
            <button onClick={clickHandler}>Add to Cart</button>
        </Cards>
    );
}


export default ProductItem;