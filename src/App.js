import React, {Component} from 'react';
import './App.css';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';



class App extends Component {
  render(){
    return (
      <div className="App"> 
        <FRParentInput />
      </div>
    );
  }
}

export default App;
