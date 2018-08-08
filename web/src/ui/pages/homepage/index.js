import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import connected from '../../../state/connect'
import { selector as animals } from './dummy_reducer'
import * as homepageActions from './dummy_actions'

class Homepage extends Component {
  componentDidMount() {
    this.props.homepageActions.fetchAnimals(2)
  }

  render() {
    console.log('Animals', this.props.animals)
    return (
      <div>
        <Link to="/login">Login Page</Link>
        {
          this.props.animals.animals.map( (element, index) => {
            return <div key={index}>This is my crazy {index+1} favorite animal: {element}</div>
        })
        }
      </div>
    )
  }
}

export default connected([animals], [homepageActions])(Homepage)
