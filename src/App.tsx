import React, { lazy, Suspense } from 'react';
import './App.scss';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';

function App() {
  return (
    <Router>
      <Suspense fallback={<CircularProgress />}>
        <Switch>
          <Route path='/' exact>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' component={lazy(() => import('./modules/home'))} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
