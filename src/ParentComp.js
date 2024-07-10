import React, { Component } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

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
        {/* <RegComp name={this.state.name}></RegComp>
        <PureComp name={this.state.name}></PureComp> */}
        <MemoComp name={this.state.name}></MemoComp>
      </div>
    )
  }
}

export default ParentComp 