import React from 'react';
import './App.scss';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home.js'
import Navigation from './components/Navigation.js'
import Mealplans from './components/Mealplans.js'
import Aboutus from './components/Aboutus.js'
import Faq from './components/Faq.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'

function App() {
  return (
        <Router>
          <Route path='/' component={Navigation}/>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/mealplans' component={Mealplans} />
                <Route path='/aboutus' component={Aboutus} />   
                <Route path='/faq' component={Faq} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />  
              </Switch>
        </Router>
  );
}

export default App;
