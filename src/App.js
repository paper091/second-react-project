import './App.css';
import { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

// News API key
// d0e16455abe44ee397a1e01a866a2478

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
