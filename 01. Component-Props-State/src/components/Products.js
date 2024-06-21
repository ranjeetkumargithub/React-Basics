import React from "react";

import './Products.css';
import Cards from "./Cards";
import ProductItem from "./ProductItem";

const Products = (props) => {
    return (
        <Cards className="products">
            <ProductItem 
                title = {props.item[0].title} 
                amount = {props.item[0].amount} 
                date = {props.item[0].date}
            />
            <ProductItem 
                title = {props.item[1].title} 
                amount = {props.item[1].amount} 
                date = {props.item[1].date}
            />
            <ProductItem 
                title = {props.item[2].title} 
                amount = {props.item[2].amount} 
                date = {props.item[2].date}
            />
            <ProductItem 
                title = {props.item[3].title} 
                amount = {props.item[3].amount} 
                date = {props.item[3].date}
            />
        </Cards>
    );
}

export default Products;