import React from 'react';
import './App.css';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Auth from './Pages/Auth/Auth';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Auth />} />
          <Route path='/messages' element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
