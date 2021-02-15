import React, { lazy, Suspense, useEffect, useState } from 'react';
import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from './modules/shared/components/header/Header.component';
import { auth } from './modules/login/services/firebase/firebase.service';

const App = () => {

  const [currentUser, setCurrentUser] = useState<any>(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      console.log(user);
    });
  }, [])


  return (
    <Suspense fallback={<CircularProgress />}>
      <Header currentUser={currentUser} />
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
