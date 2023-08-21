import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar';

class App extends Component{
  render(){
     return(
       <>
       <Navbar/>
        <div>
          <h1>My first class based component</h1>
        </div>
      </>
     )
  }
}

export default App;
