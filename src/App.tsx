import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Header from './modules/shared/components/header/Header.component';
import { AuthChange } from './modules/shared/modules/firebase/config/firebase';
import { FirebaseContext } from './modules/shared/modules/firebase/services/firebase.service';
import Router from './modules/shared/modules/routing/components/Router';
import ROUTES from './modules/shared/modules/routing/config/routes.config';
import { setCurrentUser } from './redux/actions/user.actions';


interface IProps {
  setCurrentUser: typeof setCurrentUser
}

const App = ({ setCurrentUser }: IProps) => {

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
              currentUser: {
                id: snapshot.id,
                ...snapshot.data()
              }
            });
          });
        }
      }
    }

    authMonitor$ = firebaseCtx?.monitorAuthChange(authChangeData);
  }

  return (
    <>
      <Header />
      <Router routes={ROUTES} />
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: any) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
