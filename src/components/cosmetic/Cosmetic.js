import React from 'react';
import { addToData, removeData } from '../utilites/Storage';
import './Cosmetic.css'
const Cosmetic = (props) => {
    // console.log(props)
    const { name, price, id } = props.cosmetic
    const addToCart = (id) => {
        addToData(id)
    }
    const addToCartWithPeram = () => addToCart(id)
    //remove chart 
    const removeToChart = (id) => {
        removeData(id)
    }
    return (
        <div className='cosmetic'>
            <h2>Product: {name}</h2>
            <p>Price: {price}</p>
            <p><small>Id: {id}</small></p>
            <button onClick={addToCartWithPeram}>Add to cart(1)</button>
            <button onClick={() => addToCart(id)}>Add to cart(2) </button>
            <br />
            <button onClick={() => removeToChart(id)}>Remove to chart</button>
        </div>
    );
};

export default Cosmetic;