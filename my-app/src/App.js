import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar } from 'reactstrap';
import './App.css';
import MainComponent from './components/MainComponent';
import  { BrowserRouter } from 'react-router-dom';

class App extends Component {

  constructor(props){
    super(props);
  }
  render(){
     return (
       <BrowserRouter>
          <div>
            <MainComponent />
          </div>
       </BrowserRouter>
    );
  } 
}

export default App;
