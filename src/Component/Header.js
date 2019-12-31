import React, { Fragment } from 'react';

class Header extends React.Component {
          generateLink = () => {
                    const nickname = this.props.nickname;
                    if (nickname) {
                              return (
                                        <span className="nickname">
                                                  {this.props.nickname}
                                        </span>
                              );
                    } else {
                              return (
                                        <Fragment>
                                                  <a href="/login">Login</a>
                                                  <a href="">Register</a>
                                        </Fragment>
                              );
                    }
          };
          render() {
                    return (
                              <Fragment>
                                        <div className="header">
                                                  <div className="grid">
                                                            <div className="start">
                                                                      <a href="/">
                                                                                Home
                                                                      </a>
                                                            </div>
                                                            <div className="end">
                                                                      {this.generateLink()}
                                                            </div>
                                                  </div>
                                        </div>
                              </Fragment>
                    );
          }
}
export default Header;
