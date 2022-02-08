import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
  <>
  <Router>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/services' component={Services}/>
      <Route path='/products' component={Products}/>
      <Route path='/sign-up' component={SignUp}/>
    </Switch>
    </Router>
  </>
  );
}

export default App;
