import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home.js'
import Navigation from './components/Navigation.js'

function App() {
  return (
        <Router>
          <Route path='/' component={Navigation}/>
            <Switch>
              <Route path='/' component={Home} />
              {/* Other Routes will go here later */}
            </Switch>
        </Router>
  );
}

export default App;
