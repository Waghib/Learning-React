import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
// import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStles.module.css'
import Form from './components/Form'
import LifecycleA from './LifecycleA';

class App extends Component {
  render(){
    return (
      <div className="App">
        {/* <Greet name="Waghib Ahmad" heroName="batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Bruce" heroName="superman"/> */}
        {/* <button>Action</button> */}
        {/* <Greet name="Clark"/> */}


        {/* <Welcome name="Diana" heroName="Wonder Woman"/>
        <Welcome name="Waghib Ahmad" heroName="batman"/> */}

        {/* <Message/> */}
        {/* <Counter/> */}

        {/* <Hello/> */}

        {/* <FunctionClick/>
        <ClassClick/> */}
        {/* <EventBind/> */}
        {/* <ParentComponent/> */}
        {/* <UserGreeting/> */}
        {/* <NameList/> */}
        {/* <Stylesheet primary={true}/> */}
        {/* <Inline/> */}

        {/* <h1 className='error'>Error</h1>
        <h1 className={styles.success}>Success</h1> */}

        {/* <Form/> */}
        <LifecycleA/>


      </div>
    );
  }
}

export default App;
