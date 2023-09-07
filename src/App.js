import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

class App extends Component{
  render(){
     return(
       <>
       <Navbar/>
        <div>
          <h1>My first class based component</h1>
        </div>
        <News/>
      </>
     )
  }
}

export default App;
