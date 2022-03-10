import React, { Component } from 'react'

export class PersonCard extends Component {
  render() {
    return (
      <div>
        <div>
            <h1>{this.props.firstName}, {this.props.lastName}</h1>
            <p>Age: {this.props.age}</p>
            <p>Hair Color: {this.props.hairColor}</p>
        </div>
      </div>
    )
  }
}

export default PersonCard