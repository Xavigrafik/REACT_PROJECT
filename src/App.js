// import logo from './logo.svg';
import './css/App.css';
import {Component1} from './components/Component1'
import {Component2} from './components/Component2'
import {ComponentEvento} from './components/ComponentEvento'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ComponentEvento value={0}></ComponentEvento>

        <Component1></Component1>

        <Component2></Component2>
        <Component2 titulo="titulo from App.js"></Component2>
      </header>
    </div>
  );
}

export default App;
