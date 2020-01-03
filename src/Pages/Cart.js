import React, {useEffect, useState} from 'react'
import Layout from '../Layout';
import axios from '../Helper/Instance';
import CartItem from '../Pages/CartItem';
export default function Cart() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/carts').then(res => {
            setProducts(res.data)
        })
    }, [])

    return (
        <div className="cart-page">
            <span className="cart-title">Shopping List</span>
            <div className="cart-list">
                {
                products.map((item, index) => (
                    <CartItem key={index}
                        products={item}/>
                ))
            } </div>
            <div className="cart-total">
                Total:
                <span className="total-price"></span>
            </div>
        </div>
    )
}
