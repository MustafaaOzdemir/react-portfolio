import React, { Component } from 'react';
import { BrowserRouter , Route } from 'react-router-dom' 
import './App.css';

import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Index from './components/Index'




class App extends Component {
  render (){
    return (
      <BrowserRouter>
      <Navbar/>
        <Route exact path='/react-portfolio'component={Index} />
        <Route path='/react-portfolio/contact' component={Contact}/>

      </BrowserRouter>
    )

  }
}



export default App;
