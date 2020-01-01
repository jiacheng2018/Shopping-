import React from 'react';
import shoe from '../images/shoe.jpg';
import { formatPrice } from '../Helper';
import Modal from '../Component/Modal';
import Edit from '../Component/Edit';
class Product extends React.Component {
          toEdit = () => {
                    Modal.open({
                              component: Edit,
                              callback: data => {
                                        console.log(data);
                              },
                              props: {
                                        product: this.props.product
                              }
                    });
          };

          render() {
                    const _class = {
                              available: 'product',
                              unavailable: 'product out-stock'
                    };
                    const {
                              image,
                              name,
                              tags,
                              price,
                              status
                    } = this.props.product;
                    return (
                              <div className={_class[status]}>
                                        <div className="p-content">
                                                  <div
                                                            className="p-head has-text-right"
                                                            onClick={
                                                                      this
                                                                                .toEdit
                                                            }
                                                  >
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
                                                  <button
                                                            className="add-cart"
                                                            disabled={
                                                                      status ==
                                                                      'unavailable'
                                                            }
                                                  >
                                                            <i className="fas fa-shopping-cart"></i>
                                                            <i className="fas fa-exclamation"></i>
                                                  </button>
                                        </div>
                              </div>
                    );
          }
}
export default Product;
