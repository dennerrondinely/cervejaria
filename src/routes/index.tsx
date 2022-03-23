import { Switch } from 'react-router-dom';

import Home from 'pages/Home';
import Detalhes from 'pages/Detalhes';

import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/" component={Home} exact isPrivate />
    <Route path="/detalhes/:id" component={Detalhes} />
  </Switch>
);

export default Routes;
