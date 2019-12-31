import React, { Fragment } from 'react';

class Login extends React.Component {
          state = {
                    email: '',
                    password: ''
          };
          handleChange = e => {
                    this.setState({
                              [e.target.name]: e.target.value
                    });
          };
          render() {
                    return (
                              <Fragment>
                                        <div className="login-wrapper">
                                                  <form className="login-box box">
                                                            <div className="field">
                                                                      <label
                                                                                className="label"
                                                                                htmlFor="email"
                                                                      >
                                                                                Email
                                                                      </label>
                                                                      <div className="control">
                                                                                <input
                                                                                          placeholder="Email"
                                                                                          type="text"
                                                                                          className="input"
                                                                                          value={
                                                                                                    this
                                                                                                              .state
                                                                                                              .email
                                                                                          }
                                                                                          name="email"
                                                                                          onChange={
                                                                                                    this
                                                                                                              .handleChange
                                                                                          }
                                                                                />
                                                                      </div>
                                                            </div>
                                                            <div className="field">
                                                                      <label
                                                                                className="label"
                                                                                htmlFor="password"
                                                                      >
                                                                                Password
                                                                      </label>
                                                                      <div className="control">
                                                                                <input
                                                                                          className="input"
                                                                                          type="number"
                                                                                          placeholder="Password"
                                                                                          value={
                                                                                                    this
                                                                                                              .state
                                                                                                              .password
                                                                                          }
                                                                                          name="password"
                                                                                          onChange={
                                                                                                    this
                                                                                                              .handleChange
                                                                                          }
                                                                                />
                                                                      </div>
                                                            </div>
                                                            <div className="control">
                                                                      <button className="button is-fullwidth is-primary">
                                                                                Login
                                                                      </button>
                                                            </div>
                                                  </form>
                                        </div>
                              </Fragment>
                    );
          }
}
export default Login;
