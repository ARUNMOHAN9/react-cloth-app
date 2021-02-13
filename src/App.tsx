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
            <Redirect to='/login' />
          </Route>
          <Route path='/login' component={lazy(() => import('./modules/login'))} />
          <Route path='/dashboard' component={lazy(() => import('./modules/dashboard'))} />
          <Route path='*' component={lazy(() => import('./modules/login'))} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
