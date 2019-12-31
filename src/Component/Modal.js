import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
class Modal extends Component {
          state = {
                    active: false,
                    component: null,
                    callback: null
          };
          close = data => {
                    this.setState({
                              active: false
                    });
                    this.state.callback(data);
          };
          open = props => {
                    const { component, callback } = props;
                    const _key = new Date().getTime();
                    const _component = React.createElement(component, {
                              close: this.close,
                              key: _key
                    });
                    this.setState({
                              active: true,
                              component: _component,
                              callback: callback
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
                                                            onClick={() => {
                                                                      this.close();
                                                            }}
                                                  ></div>
                                                  <div className="panel">
                                                            <div className="head">
                                                                      <span
                                                                                className="close"
                                                                                onClick={() => {
                                                                                          this.close();
                                                                                }}
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
