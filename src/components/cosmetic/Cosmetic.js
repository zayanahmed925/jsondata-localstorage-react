import React from 'react';
import { addToData } from '../utilites/Storage';
import './Cosmetic.css'
const Cosmetic = (props) => {
    // console.log(props)
    const { name, price, id } = props.cosmetic
    const addToCart = (id) => {
        addToData(id)
    }
    const addToCartWithPeram = () => addToCart(id)
    return (
        <div className='cosmetic'>
            <h2>Product: {name}</h2>
            <p>Price: {price}</p>
            <p><small>Id: {id}</small></p>
            <button onClick={addToCartWithPeram}>Add to cart(1)</button>
            <button onClick={() => addToCart(id)}>Add to cart(2) </button>
        </div>
    );
};

export default Cosmetic;