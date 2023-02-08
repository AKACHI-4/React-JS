import logo from './logo.svg';
import './App.css';
// import { Greet } from './Components/Greet';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/JSX';
import Message from './Components/Message';
import Counter from './Components/Counter';
import FunctionClick from './Components/FunctionClick';
import ClassClick from './Components/ClassClick';
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent';

function App() {
  return (
    <div className="App">
      <h1>Hello React</h1>
      {/* Self Closing tab bcoz There are no components inside component Greet */}
      {/* <Greet name="TypeScript" Area="Frontend" >
        <p>This is a children props</p>
      </Greet>
      <Greet name="Solidity" Area="Unknown">
        <button>Action</button>
        <p>I am children prop of Solidity</p>
      </Greet> */ }
      {/* <Greet name="Express" Area="Backend" />  */}

      {/* props with Class Componentsd  */}

      {/* Irrespective of component type the properties are mentioned as attribute during the component invocation */}
      
      {/* <Welcome name="TypeScript" Area="Frontend" />
      <Welcome name="Solidity" Area="Unknown" /> */}
      {/* <Welcome name="Express" Area="Backend" />  */}

      {/* <Hello /> */}
      
      {/* <Message /> */}

      {/* <Counter /> */}

      {/* <FunctionClick /> */}

      {/* <ClassClick />  */}

      {/* <EventBind /> */}

      <ParentComponent />

    </div>
  );
}

export default App;
 