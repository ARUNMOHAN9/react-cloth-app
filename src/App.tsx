import React, { useContext, useEffect } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import Header from './modules/shared/components/header/Header.component';
import { IUser } from './modules/shared/interfaces/user.interface';
import { User } from './modules/shared/models/user.model';
import { AuthChange } from './modules/shared/modules/firebase/config/firebase';
import { FirebaseContext } from './modules/shared/modules/firebase/services/firebase.service';
import Router from './modules/shared/modules/routing/components/Router';
import ROUTES from './modules/shared/modules/routing/config/routes.config';
import { setCurrentUser } from './redux/user/user.actions';


interface IProps {
  setCurrentUser: (user: IUser | null) => void
}

const App = ({ setCurrentUser }: IProps) => {

  const firebaseCtx = useContext(FirebaseContext);

  let authMonitor$: any = null;
  let userSnapshot$: any = null;

  useEffect(() => {
    monitorAuthChange();

    return () => {
      authMonitor$ && authMonitor$();
      userSnapshot$ && userSnapshot$();
    }

  }, [])

  const monitorAuthChange = () => {

    const authChangeData: AuthChange = {
      nextOrObserver: async user => {

        if (user) {
          const userRef = await firebaseCtx?.addUser(user);

          userSnapshot$ = userRef?.onSnapshot(snapshot => {
            const dbUserData = snapshot.data();

            setCurrentUser(new User({
              id: snapshot.id,
              displayName: dbUserData?.displayName,
              email: dbUserData?.email,
              createdAt: dbUserData?.createdAt,
            }));
          });
        } else {
          setCurrentUser(null);
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
  setCurrentUser: (user: IUser | null) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
