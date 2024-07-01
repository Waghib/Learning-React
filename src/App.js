import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
// import Hello from './components/Hello';
import Message from './components/Message';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Greet name="Waghib Ahmad" heroName="batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Bruce" heroName="superman"/>
        <button>Action</button>
        <Greet name="Clark"/>


        <Welcome name="Diana" heroName="Wonder Woman"/>
        <Welcome name="Waghib Ahmad" heroName="batman"/> */}

        <Message/>

        {/* <Hello/> */}
      </div>
    );
  }
}

export default App;
