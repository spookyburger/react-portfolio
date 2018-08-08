import React, { Component } from 'react'
import CSSModules from 'react-css-modules'

import css from './index.css'
import connected from '../../../state/connect'

class LandingPage extends Component {
  render() {
    return (
      <div styleName="container">
        this is our landing page
      </div>
    )
  }
}

export default connected([], [])(CSSModules(LandingPage, css))
