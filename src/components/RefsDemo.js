import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.cbref = null
        this.setCbRef = element => {
            this.cbref = element
        }
    }

    componentDidMount() {
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
        if(this.cbref) {
            this.cbref.focus()
        }
    }

    clickHandler = () => {
        alert(this.inputRef.current.value)
    }

  render() {  
    return (
        <div>
            <input type="text" ref={this.inputRef} />
            <input type="text" ref={this.setCbRef} />
            <button onClick={this.clickHandler}>Click</button>
        </div>
    )
  }
}

export default RefsDemo