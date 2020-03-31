import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserContainer from '../components/user/UserContainer';
import Search from '../components/form/Search';
import Header from '../components/header/Header';
import './App.css';

export default function App() {
  return (
    <Router>
      <Header />
      <Route path="/" component={Search} />
      <Route path="/" component={UserContainer} />
    </Router>
  );
}

