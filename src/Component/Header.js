import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile';

class Header extends React.Component {
          generateLink = () => {
                    const nickname = this.props.user.nickname;
                    if (nickname) {
                              return (
                                        <span className="nickname">
                                                  {nickname}
                                        </span>
                              );
                    } else {
                              return (
                                        <Fragment>
                                                  <a href="/login">Login</a>

                                                  <a href="/register">
                                                            Register
                                                  </a>
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
                                                                      <a href="/Home">
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
