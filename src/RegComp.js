import React, { Component } from 'react'

class RegComp extends Component {
  render() {
  console.log('Regular component render')
    return (
      <div>
        Regular component {this.props.name}
       </div>
    )
  }
}

export default RegComp

// Regular Component
// A regular component in React is a component that does not implement the shouldComponentUpdate method. It always returns true from this method. This means that the component will always re-render when the parent component re-renders, regardless of whether the props or state have changed. This can lead to unnecessary re-renders of the component and its children.