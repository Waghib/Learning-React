import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

  render() {
    return (
    <div>
        {this.props.children(this.state.count, this.incrementCount)}
    </div>
    )
  }
}

export default Counter

// setState
// always make use of the setState and never modify the state directly
// code has to be executed after the state has been updated? Place that code in the callback function which is the second argument to the setState method
// when you have to update state based on the previous state value, pass in a function as an argument instead of the regular object