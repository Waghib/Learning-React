import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  render() {
    console.log('Pure component render')
    return (
      <div>
        Pure component {this.props.name}
      </div>
    )
  }
}

export default PureComp

// Pure Component
// A pure component in React is a component that implements the shouldComponentUpdate lifecycle method to perform a shallow comparison of the current props and state with the next props and state. If there is no difference, the component does not re-render. This can prevent an unnecessary re-render of the component and its children.