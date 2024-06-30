import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';


class App extends Component {
  render(){
    return (
      <div className="App">
        <Greet name="Waghib Ahmad" heroName="batman"/>
        <Greet name="Bruce" heroName="superman"/>
        <Greet name="Clark"/>

        {/* <Welcome/>
        <Hello/> */}
      </div>
    );
  }
}

export default App;
