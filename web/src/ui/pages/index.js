// import omit from 'lodash/omit'
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import CSSModules from 'react-css-modules'

// autoLoginProcess
import { protectedRoute } from '../../process/users/auth'

import css from './index.css'
import Header from '../components/header'
import Footer from '../components/footer'

import Landing from './landing'
import Home from './homepage/'
import Login from './login/'

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <div styleName="header-container">
          <Header />
        </div>
        <div styleName="content-container">
          <Switch>
            <Route exact path="/" component={Home} />,
            <Route exact path="/login" component={Login} />,
            <Route exact path="/landing" component={protectedRoute(Landing)} />
          </Switch>
        </div>
        <div styleName="footer-container">
          <Footer />
        </div>
      </div>
    )
  }
}

export default CSSModules(App, css)
