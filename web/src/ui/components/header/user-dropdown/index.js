import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Icon, Image } from 'semantic-ui-react'

import connected from '../../../../state/connect'
import { selector as users } from '../../../../process/users/reducer'

const options = [
  { key: 'profile', as: Link, to: '/profile', text: 'Account', icon: 'user' },
  { key: 'settings', as: Link, to: '/profile/settings', text: 'Settings', icon: 'settings' },
  { key: 'sign-out', as: Link, to: '/sign-out', text: 'Sign Out', icon: 'sign out' }
]

class HeaderNavLinks extends Component {
  render() {
    const { active, entities } = this.props.users
    const user = entities[active]
    const trigger = (
      <span>
        <Image avatar src={`${user.lastName}`} >
          <Icon circular disabled name="user" size="large" />
        </Image>
      </span>
    )

    return [
      <Dropdown
        key="user-dropdown"
        trigger={trigger}
        options={options}
        pointing="top right"
        icon={null} />
    ]
  }
}

export default connected([users], [])(HeaderNavLinks)
