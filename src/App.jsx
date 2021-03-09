import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import BlogDetail from './components/BlogDetail';
import Create from './components/Create';

import Home from './components/Home';
import NavBar from './components/NavBar';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/create" exact><Create /></Route>
            <Route path="/blogs/:id"><BlogDetail /></Route>
            <Route path="*"><NotFound /></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
