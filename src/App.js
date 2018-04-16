import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import 'styling/semantic.less';
import { Navbar, Home } from 'components';

const App = () => (
  <div>
    <Navbar />
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
