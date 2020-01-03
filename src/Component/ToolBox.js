import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from '../Helper/Instance';
import {withRouter} from 'react-router-dom';
class ToolBox extends Component {
    state = {
        inputText: ''
    };
    handleChange = e => {
        const value = e.target.value;
        this.setState({[e.target.name]: e.target.value});
        this.props.search(value);
    };
    clearSearchText = () => {
        this.setState({inputText: ''});
        this.props.search('');
    };
    goCart = () => {
        this.props.history.push('/cart');
    }
    render() {
        return (
            <div className="tool-box">
                <div className="logo-text"></div>
                <div className="search-box">
                    <div className="field has-addons">
                        <div className="control">
                            <input type="text" className="input search-input" placeholder="search Product"
                                value={
                                    this.state.inputText
                                }
                                name="inputText"
                                onChange={
                                    this.handleChange
                                }/>
                        </div>
                        <div className="control">
                            <button className="button"
                                onClick={
                                    () => {
                                        this.clearSearchText()
                                    }
                            }>
                                X
                            </button>
                        </div>
                    </div>
                </div>
                <div className="cart-text"
                    onClick={
                        this.goCart
                }>
                    <i className="fas fa-shopping-cart"></i>
                    <span className="cart-num">({

                        this.props.cartNum
                    })</span>
                </div>
            </div>
        );
    }
}
export default withRouter(ToolBox);
