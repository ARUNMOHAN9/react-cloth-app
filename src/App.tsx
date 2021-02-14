import React, { lazy, Suspense } from 'react';
import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from './modules/shared/components/header/Header.component';

function App() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Header />
      <Switch>
        <Route path='/' exact>
          <Redirect to='/home' />
        </Route>
        <Route path='/home' component={lazy(() => import('./modules/home'))} />
        <Route path='/login' component={lazy(() => import('./modules/login'))} />
        <Route path='/shop' component={lazy(() => import('./modules/shop'))} />
      </Switch>
    </Suspense>
  );
}

export default App;
