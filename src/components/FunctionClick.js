import React from 'react'

function FunctionClick() {

    function clickHandler(){
        console.log('Button clicked')
    }
 
  return (
    <div>
        {/* Event handler is a function not a function call */}
        <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick 