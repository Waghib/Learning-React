import React, { Component } from 'react'

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    increment() { 
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Callback value', this.state.count)
        
        // })

        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
        console.log(this.state.count) 
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

  render() {
    return (
    
    <div>
        <div>
            Count - {this.state.count}
        </div>
        <button onClick={() => this.incrementFive()}>Increment</button>
    </div>


    )
  }
}

export default Counter

// setState
// always make use of the setState and never modify the state directly
// code has to be executed after the state has been updated? Place that code in the callback function which is the second argument to the setState method
// when you have to update state based on the previous state value, pass in a function as an argument instead of the regular object