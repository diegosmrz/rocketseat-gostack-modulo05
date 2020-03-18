import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Repository} />
        <Route path="/main" component={Repository} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}
