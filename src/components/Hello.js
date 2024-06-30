import React from 'react';


const Hello = () => {
    // return (
    //     <div className= 'dummyClass' >
    //         <h1>Hello Waghib</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Waghib'))

}

export default Hello;

// JSX differences
// 1. class -> className
// 2. for -> htmlFor
// 3. camelCase property naming convention 




