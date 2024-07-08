import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
        this.stat = {
            name: 'Waghib'
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }
     
  render() {
    console.log('LifecycleA render')
    return (
        <div>Lifecycle B</div>
    )
  }
}

export default LifecycleB