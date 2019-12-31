import React from 'react';
import shoe from '../images/shoe.jpg';
import { formatPrice } from '../Helper';
class Product extends React.Component {
          render() {
                    const { image, name, tags, price } = this.props.product;
                    return (
                              <div className="product">
                                        <div className="p-content">
                                                  <div className="img-wrapper">
                                                            <figure className="image is-4by3">
                                                                      <img
                                                                                alt="img"
                                                                                src={
                                                                                          shoe
                                                                                }
                                                                                alt={
                                                                                          name
                                                                                }
                                                                      />
                                                            </figure>
                                                            <p className="p-tags">
                                                                      {tags}
                                                            </p>
                                                            <p className="p-name">
                                                                      {name}
                                                            </p>
                                                  </div>
                                        </div>
                                        <div className="p-footer">
                                                  <p className="price">
                                                            {formatPrice(price)}
                                                  </p>
                                                  <button className="add-cart">
                                                            <i className="fas fa-shopping-cart"></i>
                                                            <i className="fas fa-exclamation"></i>
                                                  </button>
                                        </div>
                              </div>
                    );
          }
}
export default Product;
