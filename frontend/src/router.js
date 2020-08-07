import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dash from './pages/Dash';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Dash} />
      </Switch>
    </BrowserRouter>
  );
}
