import app from 'firebase/app';

import "firebase/auth";
import "firebase/firestore";

export interface AuthChange {
    nextOrObserver: app.Observer<any, Error> | ((a: app.User | null) => any);
    error?: ((a: app.auth.Error) => any) | undefined;
    completed?: app.Unsubscribe | undefined
}

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    databaseURL: process.env.REACT_APP_DATABASE_URL
};

class Firebase {
    private provider: app.auth.GoogleAuthProvider;
    private db: app.firestore.Firestore;

    constructor() {
        app.initializeApp(config);
        this.provider = this.initializeProvider();
        this.db = app.firestore();
    }

    private initializeProvider() {
        const provider = new app.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        provider.setCustomParameters({ prompt: 'select_account' });
        return provider;
    }

    addCollectionAndDocuments = async (
        collectionKey: string,
        objectsToAdd: any[]
    ) => {
        const collectionRef = app.firestore().collection(collectionKey);

        const batch = app.firestore().batch();
        objectsToAdd.forEach((obj) => {
            const newDocRef = collectionRef.doc();
            batch.set(newDocRef, obj);
        });

        return await batch.commit();
    };


    signInWithGoogle() {
        return app.auth().signInWithPopup(this.provider);
    }

    signInWithEmailAndPassword(email: string, password: string) {
        return app.auth().signInWithEmailAndPassword(email, password);
    }

    registerWithEmailAndPassword(email: string, password: string) {
        return app.auth().createUserWithEmailAndPassword(email, password)
    }

    monitorAuthChange(authChangeData: AuthChange) {
        const { nextOrObserver, error, completed } = authChangeData;
        return app.auth().onAuthStateChanged(nextOrObserver, error, completed);
    }

    signOut() {
        return app.auth().signOut();
    }

    async addUser(userAuth: any) {
        if (!userAuth) {
            return;
        }

        const userRef = this.db.doc(`users/${userAuth.uid}`);

        const snapshot = await userRef.get();

        if (!snapshot.exists) {
            const { displayName, email } = userAuth;
            const createdAt = new Date();

            try {
                await userRef.set({
                    displayName,
                    email,
                    createdAt
                })
            } catch (error) {
                console.log(error);
            }


        }
        return userRef;
    }

    getCollections(): Promise<any> {
        return new Promise((resolve, reject) => {
            const collectionRef = app.firestore().collection('collections');
            collectionRef.onSnapshot(async snapShop => {
                const transformedCollection = snapShop.docs.map((doc) => {
                    const { title, items } = doc.data();

                    return {
                        routeName: encodeURI(title.toLowerCase()),
                        id: doc.id,
                        title,
                        items,
                    };
                });

                resolve(transformedCollection);
            });
        });
    }
}

export { Firebase as _Firebase };