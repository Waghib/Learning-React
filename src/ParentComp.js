import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Waghib'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Waghib'
            })
        }, 2000)
    }

  render() {
    console.log('Parent component render')
    return (
      <div>
        Parent component
        <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp>
      </div>
    )
  }
}

export default ParentComp 