import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
class Modal extends Component {
          state = {
                    active: false,
                    component: null
          };
          close = () => {
                    this.setState({
                              active: false
                    });
          };
          open = props => {
                    const { component } = props;
                    const _component = React.createElement(component);
                    this.setState({
                              active: true,
                              component: _component
                    });
          };

          render() {
                    const _class = {
                              true: 'panel-wrapper active',
                              false: 'panel-wrapper'
                    };
                    return (
                              <Fragment>
                                        <div
                                                  className={
                                                            _class[
                                                                      this.state
                                                                                .active
                                                            ]
                                                  }
                                        >
                                                  <div
                                                            className="over-layer"
                                                            onClick={this.close}
                                                  ></div>
                                                  <div className="panel">
                                                            <div className="head">
                                                                      <span
                                                                                className="close"
                                                                                onClick={
                                                                                          this
                                                                                                    .close
                                                                                }
                                                                      >
                                                                                X
                                                                      </span>
                                                                      {
                                                                                this
                                                                                          .state
                                                                                          .component
                                                                      }
                                                            </div>
                                                  </div>
                                        </div>
                              </Fragment>
                    );
          }
}
const _div = document.createElement('div');
document.body.appendChild(_div);
const _panel = render(<Modal />, _div);
console.log(_panel);
export default _panel;
