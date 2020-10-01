import React from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from './NotFound';

import Proximo from '../pages/Proximo';
import Proximos from '../pages/Proximos';
import Anteriores from '../pages/Anteriores';

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Proximo} />
      <Route path="/proximos" component={Proximos} />
      <Route path="/anteriores" component={Anteriores} />
      <NotFound path="*" />
    </Switch>
  );
};
