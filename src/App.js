import React, {Component} from 'react';
import './App.css';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';



class App extends Component {
  render(){
    return (
      <div className="App"> 
        {/* <RefsDemo /> */}
        <FocusInput />
      </div>
    );
  }
}

export default App;
