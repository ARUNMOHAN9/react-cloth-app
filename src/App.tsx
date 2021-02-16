import React, { lazy, Suspense, useContext, useEffect, useState } from 'react';
import './App.scss';
import { Redirect, Route, Switch } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Header from './modules/shared/components/header/Header.component';
import { AuthChange } from './modules/shared/modules/firebase/config/firebase';
import { FirebaseContext } from './modules/shared/modules/firebase/services/firebase.service';

const App = () => {

  const [currentUser, setCurrentUser] = useState<any>(null);

  const firebaseCtx = useContext(FirebaseContext);

  useEffect(() => {
    monitorAuthChange();
  }, [])

  const monitorAuthChange = () => {
    const authChangeData: AuthChange = {
      nextOrObserver: user => {
        setCurrentUser(user);
        console.log(user);
      }
    }

    firebaseCtx?.monitorAuthChange(authChangeData);
  }


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
