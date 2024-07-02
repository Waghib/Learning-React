import React from "react";


// function Greet(){
//     return <h1>Hello Waghib</h1>
// }

// destructuring props in function parameter const Greet = ({name, heroName})
const Greet = (props) => {
    const {name, heroName} = props // destructuring in function body
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName} </h1>
        </div>
)}


export default Greet;

// Functional Component

// 1. use as much as possible
// 2. Absence of 'this' keyword
// 3. Solution without using state
// 4. Mainly responsible for the UI
// 5. Stateless/Dumb/Presentational
