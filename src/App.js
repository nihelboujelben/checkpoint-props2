import React from 'react';
import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile.js' ;
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image';
 

function App() {
  return (
    <div className="App">
    <Profile FulName="nihel" Bio="welcome" profession="Student">
      <img src="nihel.jpg" style={{width:270, height:350}} className="img-thumbnail"/>
    </Profile>
    </div>
  );
}
Profile.prototype = {
  FulName: PropTypes.string,
  Bio:PropTypes.string,
  profession:PropTypes.string,
}

export default App;
