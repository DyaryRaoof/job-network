import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Jobs from './components/Jobs';
import Login from './components/Login';
import Signup from './components/Signup';
import history from './history';

const App = () => (
  <Router history={history}>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/jobs" element={<Jobs />} />
    </Routes>
  </Router>
);
export default App;
