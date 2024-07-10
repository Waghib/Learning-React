import React, {Component} from 'react';
import './App.css';
import PureComp from './PureComp';
import ParentComp from './ParentComp';


class App extends Component {
  render(){
    return (
      <div className="App"> 
        {/* <PureComp /> */}
        <ParentComp/>
      </div>
    );
  }
}

export default App;
