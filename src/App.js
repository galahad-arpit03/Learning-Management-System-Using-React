import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/common/header/Header';
import About from './components/about/About'

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path='/about' component={About} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
