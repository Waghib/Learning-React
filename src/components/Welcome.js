import React, {Component} from 'react';

class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome;

// Class Component
// 1. More feature rich
// 2. Maintain their own private data - state
// 3. Complex UI logic
// 4. Provide lifecycle hooks
// 5. Stateful/Smart/Container
