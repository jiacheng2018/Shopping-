import React, { Fragment } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Component/Header';
import './Css/App.scss';
import './Css/index.scss';
import Home from './Pages/Home';
import './Component/Header';
import Notfound from './Pages/Notfound';
import Login from './Pages/Login';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import './Helper/Auth';
function App() {
          return (
                    <Fragment>
                              <Header />
                              <ToastContainer
                                        position="top-right"
                                        autoClose={5000}
                                        hideProgressBar
                                        newestOnTop={false}
                                        rtl={false}
                                        draggable
                                        pauseOnHover
                              />
                              <Router>
                                        <Switch>
                                                  <Route
                                                            exact
                                                            path="/login/:loginname"
                                                            component={Login}
                                                  />
                                                  <Route
                                                            exact
                                                            path="/Home"
                                                            component={Home}
                                                  />
                                                  <Route component={Notfound} />
                                        </Switch>
                              </Router>
                    </Fragment>
          );
}

export default App;
