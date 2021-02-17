import React, { useContext, useEffect, useState } from 'react';
import './App.scss';
import Header from './modules/shared/components/header/Header.component';
import { AuthChange } from './modules/shared/modules/firebase/config/firebase';
import { FirebaseContext } from './modules/shared/modules/firebase/services/firebase.service';
import Router from './modules/shared/modules/routing/components/Router';
import ROUTES from './modules/shared/modules/routing/config/routes.config';

const App = () => {

  const [currentUser, setCurrentUser] = useState<any>(null);

  const firebaseCtx = useContext(FirebaseContext);

  let authMonitor$: any = null;
  let userSnapshot$: any = null;

  useEffect(() => {
    monitorAuthChange();

    return () => {
      authMonitor$?.unsubscribe();
      userSnapshot$?.unsubscribe();
    }

  }, [])

  const monitorAuthChange = () => {

    const authChangeData: AuthChange = {
      nextOrObserver: async user => {

        if (user) {
          const userRef = await firebaseCtx?.addUser(user);

          userSnapshot$ = userRef?.onSnapshot(snapshot => {
            setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
            });
          });
        }
        console.log(currentUser);
      }
    }

    console.log(currentUser);

    authMonitor$ = firebaseCtx?.monitorAuthChange(authChangeData);
  }

  return (
    <>
      <Header currentUser={currentUser} />
      <Router routes={ROUTES} />
    </>
  );
}

export default App;
