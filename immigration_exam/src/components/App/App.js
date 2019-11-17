import React from 'react';
import './reset.css';
import './App.css';
import Nav from '../Nav/Nav';
import SideNav from '../SideNav/SideNav';
import Home from '../Home/Home';


function App() {
  return (
    <div className="App">
      <Nav />
      <SideNav />
      <Home />
    </div>
  );
}

export default App;
