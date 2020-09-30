import React, {Component} from 'react';

import './App.css';
import Home from './pages/Home';
import Header from './components/Header';
import Menubar from './components/Menubar';
import Footer from './components/Footer';
import Form from './components/Form';



class App extends React.Component {
  constructor(props){
    super(props);
  }
  handleEvent(){
    console.log(this.props);
  }
  render() {
    return (
      <div className="App">
      <Header />
      <Menubar />
      
      <Home />
      <Footer />
      </div>
    );
  }
}



export default App;
