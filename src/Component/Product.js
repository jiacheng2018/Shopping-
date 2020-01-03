import React from 'react';
import shoe from '../images/shoe.jpg';
import {formatPrice} from '../Helper';
import Modal from '../Component/Modal';
import Edit from '../Component/Edit';
import {toast, ToastPosition} from 'react-toastify';
import axios from '../Helper/Instance';
class Product extends React.Component {
    toEdit = () => {
        Modal.open({
            component: Edit,
            callback: data => {
                if (data) {
                    this.props.update(data)
                }
            },
            props: {
                product: this.props.product,
                delete: this.props.Delete
            }
        });
    };
    componentDidMount = () => {
        this.props.updateNum();
    }
    addCart = async () => {
        try {
            const {id, name, image, price} = this.props.product;
            const res = await axios.get(`/carts?productId=${id}`);
            const carts = res.data;
            if (carts && carts.length > 0) {
                const cart = carts[0];
                cart.mount += 1;
                await axios.put(`/carts/${
                    cart.id
                }`, cart);
            } else {
                const cart = {
                    productId: id,
                    name,
                    image,
                    price,
                    mount: 1
                };
                await axios.post('/carts', cart);
            }
            this.props.updateNum();
            toast.success('Add Cart Success');
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const _class = {
            available: 'product',
            unavailable: 'product out-stock'
        };
        const {image, name, tags, price, status} = this.props.product;
        return (
            <div className={
                _class[status]
            }>
                <div className="p-content">
                    <div className="p-head has-text-right"
                        onClick={
                            this.toEdit
                    }>
                        <span className="icon edit-btn">
                            <i className="fas fa-sliders-h"></i>
                        </span>
                    </div>
                    <div className="img-wrapper">
                        <div className="out-stock-text">
                            Out Of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Stock
                        </div>
                        <figure className="image is-4by3">
                            <img alt="img"
                                src={shoe}
                                alt={name}/>
                        </figure>
                        <p className="p-tags">
                            {tags} </p>
                        <p className="p-name">
                            {name} </p>
                    </div>
                </div>
                <div className="p-footer">
                    <p className="price">
                        {
                        formatPrice(price)
                    } </p>
                    <button className="add-cart"
                        disabled={
                            status == 'unavailable'
                        }
                        onClick={
                            this.addCart
                    }>
                        <i className="fas fa-shopping-cart"></i>
                        <i className="fas fa-exclamation"></i>
                    </button>
                </div>
            </div>
        );
    }
}
export default Product;
