import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Routes from './Routes';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
      <div className="row">
          <div className="row_left">
          <Sidebar />
          </div>
         <div className="row_right">
            <Header />
            <Routes />
         </div>
      </div>
      
    </div>
    </>
  );
}

export default App;
