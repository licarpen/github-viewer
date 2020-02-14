import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserContainer from '../components/user/UserContainer';
import Search from '../components/form/Search';

export default function App() {
  return (
    <Router>
      <Route path="/" component={Search} />
      <Route path="/" component={UserContainer} />
    </Router>
  );
}

