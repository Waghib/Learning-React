import React from "react";


// function Greet(){
//     return <h1>Hello Waghib</h1>
// }

const Greet = (props) => {
    console.log(props)
    return <h1>Hello {props.name} a.k.a {props.heroName} </h1>
}


export default Greet;

// Functional Component

// 1. use as much as possible
// 2. Absence of 'this' keyword
// 3. Solution without using state
// 4. Mainly responsible for the UI
// 5. Stateless/Dumb/Presentational
