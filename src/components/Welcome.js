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


//Props vs State
// 1. props get passed to the component whereas state is managed within the component
// 2.function parameters vs variables declared in a function
// 3. props are immutable whereas state can be changed
// 4. props - functional components   useState hook - functional components
// this.props - class components      this.state - class components
