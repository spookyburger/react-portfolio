import React from 'react'
import { Redirect } from 'react-router-dom'

import * as userAuthActions from './actions'
import connected from '../../../state/connect'
import { selector as users } from '../reducer'
import JWTVerify from './verify-jwt-token'

const autoLoginProcess = WrappedComponent => {
  class AutoLogin extends React.Component {
    render() {
      const { active } = this.props.users
      if (active)
        return <Redirect to={{ pathname: '/landing', state: { from: this.props.location } }} />

      return <WrappedComponent />
    }
  }

  return connected([users], [userAuthActions])(JWTVerify(AutoLogin))
}

export default autoLoginProcess
