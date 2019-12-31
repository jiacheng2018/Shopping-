import React, { Component } from 'react';

export default class ToolBox extends Component {
          state = {
                    inputText: ''
          };
          handleChange = e => {
                    const value = e.target.value;
                    this.setState({
                              [e.target.name]: e.target.value
                    });
                    this.props.search(value);
          };
          clearSearchText = () => {
                    this.setState({
                              inputText: ''
                    });
                    this.props.search('');
          };

          render() {
                    return (
                              <div className="tool-box">
                                        <div className="logo-text"></div>
                                        <div className="search-box">
                                                  <div className="field has-addons">
                                                            <div className="control">
                                                                      <input
                                                                                type="text"
                                                                                className="input search-input"
                                                                                placeholder="search Product"
                                                                                value={
                                                                                          this
                                                                                                    .state
                                                                                                    .inputText
                                                                                }
                                                                                name="inputText"
                                                                                onChange={
                                                                                          this
                                                                                                    .handleChange
                                                                                }
                                                                      />
                                                            </div>
                                                            <div className="control">
                                                                      <button className="button">
                                                                                X
                                                                      </button>
                                                            </div>
                                                  </div>
                                        </div>
                                        <div className="cart-text">
                                                  <i className="fas fa-shopping-cart"></i>
                                                  <span className="cart-num"></span>
                                        </div>
                              </div>
                    );
          }
}
