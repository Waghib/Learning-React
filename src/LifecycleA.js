import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: 'Waghib'
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'Codevolution'
        })
    }
     
  render() {
    console.log('LifecycleA render')
    return (
        <div>
            <div>
                Lifecycle A
            </div>
            <button onClick={this.changeState}>Change State</button>
            <LifecycleB/>
        </div>
    )
  }
}

export default LifecycleA

// life cycle methods
// Mounting :- When an instance of a component is being created and inserted into the DOM
// Updating :- When a component is being re-rendered as a result of changes to either its props or state
// Unmounting :- When a component is being removed from the DOM
// Error Handling :- When there is an error during rendering, in a lifecycle method, or in the constructor of any child component

// Mounting
// constructor
// static getDerivedStateFromProps
// render
// componentDidMount

// Updating
// static getDerivedStateFromProps
// shouldComponentUpdate
// render
// getSnapshotBeforeUpdate
// componentDidUpdate

// Unmounting
// componentWillUnmount :- This method is called when a component is being removed from the DOM

// Error Handling
// static getDerivedStateFromError
// componentDidCatch
// when there is an error either during rendering, in a lifecycle method, or in the constrcutor of any child component.
 