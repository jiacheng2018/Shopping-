import React, { Fragment } from 'react';
import Product from './Product';
import ToolBox from './ToolBox';
import Modal from '../Component/Modal';
import Addinfo from '../Component/Addinfo';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
class Products extends React.Component {
          state = {
                    products: [],
                    sourceProduct: []
          };
          componentWillMount = () => {
                    fetch('http://localhost:3008/products')
                              .then(response => {
                                        return response.json();
                              })
                              .then(data => {
                                        this.setState({
                                                  products: data,
                                                  sourceProduct: data
                                        });
                              });
          };
          toAdd = () => {
                    Modal.open({
                              component: Addinfo
                    });
          };
          searchText = text => {
                    let _text = [...this.state.sourceProduct];
                    _text = _text.filter(p => {
                              const matchArray = p.name.match(
                                        new RegExp(text, 'gi')
                              );
                              return !!matchArray;
                    });
                    this.setState({
                              products: _text
                    });
          };
          render() {
                    return (
                              <Fragment>
                                        <ToolBox search={this.searchText} />
                                        <div className="products">
                                                  <div className="columns is-multiline is-desktop">
                                                            <TransitionGroup
                                                                      component={
                                                                                null
                                                                      }
                                                            >
                                                                      {this.state.products.map(
                                                                                p => {
                                                                                          return (
                                                                                                    <CSSTransition
                                                                                                              classNames="product-fade"
                                                                                                              timeout={{
                                                                                                                        enter: 300,
                                                                                                                        exit: 300
                                                                                                              }}
                                                                                                              key={
                                                                                                                        p.id
                                                                                                              }
                                                                                                    >
                                                                                                              <div
                                                                                                                        className="column  is-3"
                                                                                                                        key={
                                                                                                                                  p.id
                                                                                                                        }
                                                                                                              >
                                                                                                                        <Product
                                                                                                                                  product={
                                                                                                                                            p
                                                                                                                                  }
                                                                                                                        />
                                                                                                              </div>
                                                                                                    </CSSTransition>
                                                                                          );
                                                                                }
                                                                      )}
                                                            </TransitionGroup>
                                                  </div>
                                                  <button
                                                            onClick={this.toAdd}
                                                            className="button is-primary add-btn"
                                                  >
                                                            Add
                                                  </button>
                                        </div>
                              </Fragment>
                    );
          }
}
export default Products;
