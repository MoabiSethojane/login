import logo from './logo.svg';
import './App.css';
import Welcome from './components/Welcome';
import Homepage from './components/Homepage';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AddProduct from './components/AddProduct';

function App() {
  return (
    <div className='app'>
    <Router>
     
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/addProduct" element={<AddProduct/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
