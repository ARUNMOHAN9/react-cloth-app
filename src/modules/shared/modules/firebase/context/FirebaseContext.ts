import React from 'react';
import Firebase from '../services/firebase.service';

const FirebaseContext = React.createContext<null | Firebase>(null);


export { FirebaseContext as _FirebaseContext };