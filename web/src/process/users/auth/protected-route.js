import React from 'react'
import { Redirect } from 'react-router-dom'

import connected from '../../../state/connect'
import { selector as users } from '../reducer'
import JWTVerify from './verify-jwt-token'

const protectedRoute = WrappedComponent => {
  class PrivateRoute extends React.Component {
    render() {
      const { active } = this.props.users
      if (!active)
        return <Redirect to={{ pathname: '/', state: { from: this.props.location } }} />

      return <WrappedComponent {...this.props} />
    }
  }

  return connected([users], [])(JWTVerify(PrivateRoute))
}

export default protectedRoute
