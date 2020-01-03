import React from 'react';
import Img from '../images/shoe2.jpg';
import {formatPrice} from '../Helper/index';
function CarItem(props) {
    const {name, mount, price} = props.products || {};
    return (
        <div className="columns colum-block is-vcentered ">
            <div className="column">
                <span className="close">X</span>
            </div>
            <div className="column">
                <img src={Img}
                    alt=""/>
            </div>
            <div className="column cart-name">
                {name}</div>
            <div className="column">
                <span className="price">
                    {
                    formatPrice(price)
                }</span>
            </div>
            <div className="column">
                <input className="input num-input" type="number"
                    value={mount}/>
            </div>
            <div className="column">
                <span className="sum-price">$538.00</span>
            </div>
        </div>

    )
}
export default CarItem;
