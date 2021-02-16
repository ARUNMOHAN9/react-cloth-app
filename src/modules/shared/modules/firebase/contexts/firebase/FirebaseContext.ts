import React from 'react';
import { _Firebase as Firebase } from '../../config/firebase';


const FirebaseContext = React.createContext<null | Firebase>(null);


export { FirebaseContext as _FirebaseContext };