import React, {Fragment} from 'react';
import Product from './Product';
import ToolBox from './ToolBox';
import Modal from '../Component/Modal';
import Addinfo from '../Component/Addinfo';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import axios from '../Helper/Instance';
class Products extends React.Component {
    state = {
        products: [],
        sourceProduct: [],
        cartNum: 0
    };
    componentWillMount = () => {
        fetch('http://localhost:3009/products').then(response => {
            return response.json();
        }).then(data => {
            this.setState({products: data, sourceProduct: data});
        });
    };
    toAdd = () => {
        Modal.open({
            component: Addinfo,
            callback: data => {
                if (data) {
                    this.add(data);
                }
                console.log('product', data);
            }
        });
    };
    delete = id => {
        const _products = this.state.products.filter(item => {
            return item.id !== id
        })
        const _sourceproducts = this.state.sourceProduct.filter(item => {
            return item.id !== id
        })
    }
    add = product => {
        const _product = [...this.state.products];
        _product.push(product);
        const _sourceproduct = [...this.state.sourceProduct];
        _sourceproduct.push(_sourceproduct);
        this.setState({products: _product, sourceProduct: _sourceproduct});
    };
    searchText = text => {
        let _text = [...this.state.sourceProduct];
        _text = _text.filter(p => {
            if (p.name) {
                const matchArray = p.name.match(new RegExp(text, 'gi'));
                return !! matchArray;
            }
        })
        this.setState({products: _text});
    };

    update = product => {
        const _products = [...this.state.products];
        const _index = _products.findIndex(p => p.id == product.id);
        _products.splice(_index, 1, product);
        const _sproduct = [this.state.sourceProduct];
        const _sindex = _products.findIndex(p => p.id == product.id);
        _sproduct.splice(_sindex, 1, product);
        this.setState({products: _products, sourceproduct: _sproduct})
    }
    updateCartNum = async () => {
        const item = await this.initiaCartNum()
        this.setState({cartNum: item})
    }
    initiaCartNum = async () => {
        const res = await axios.get('/carts');
        const data = res.data || [];
        const itemAmout = data.map(item => item.mount).reduce((a, value) => a + value, 0);
        return itemAmout;
    }
    render() {
        return (
            <Fragment>
                <ToolBox search={
                        this.searchText
                    }
                    cartNum={
                        this.state.cartNum
                    }/>
                <div className="products">
                    <div className="columns is-multiline is-desktop">
                        <TransitionGroup component={null}>
                            {
                            this.state.products.map(p => {
                                return (
                                    <CSSTransition classNames="product-fade"
                                        timeout={
                                            {
                                                enter: 300,
                                                exit: 300
                                            }
                                        }
                                        key={
                                            p.id
                                    }>
                                        <div className="column  is-3"
                                            key={
                                                p.id
                                        }>
                                            <Product product={p}
                                                Delete={
                                                    this.delete
                                                }
                                                update={
                                                    this.update
                                                }
                                                updateNum={
                                                    this.updateCartNum
                                                }/>
                                        </div>
                                    </CSSTransition>
                                );
                            })
                        } </TransitionGroup>
                    </div>
                    <button onClick={
                            this.toAdd
                        }
                        className="button is-primary add-btn">
                        Add
                    </button>
                </div>
            </Fragment>
        );
    }
}
export default Products;
