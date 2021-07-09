import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './pages/Home'
import {About} from './pages/About'
import {Random} from './pages/Random'
import {Navbar} from './components/Navbar'


function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <div className="container pt-4">
          <Switch>
            <Route path={'/'} exact component={Home} />
            <Route path={'/about'} component={About} />
            <Route path={'/random'} component={Random} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
