import React, { Component } from 'react';
import Header from './components/header';
import FrontNewsReel from './components/FrontNewsReel'
import logo from './logo.svg';
import axios from 'axios';
import './App.css';


class App extends Component {



  componentDidMount(){
    axios.get('https://newsapi.org/v2/sources?language=en&apiKey=5d9f7c67d4384f35bd73aa91efca8a73')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }




  render() {

    return (
     <div>
      <Header />
      <FrontNewsReel />
     </div>
    );
  }
}

export default App;
