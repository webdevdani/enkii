import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import { OWNER } from 'constants/roles';
import listSchema, { LIST_ITEMS } from 'constants/schemas/list';
import listItemSchema, { ORDER } from 'constants/schemas/listItem';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};

// Database Keys
const USERS = 'users';
const LISTS = 'lists';

class Firebase {
    constructor() {
        firebase.initializeApp(config);

        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    /* *** Auth API *** */

    doCreateUserWithEmailAndPassword = (email, password) => (
        this.auth.createUserWithEmailAndPassword(email, password)
    );

    doSignInWithEmailAndPassword = (email, password) => (
        this.auth.signInWithEmailAndPassword(email, password)
    );

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => (
        this.auth.currentUser.updatePassword(password)
    );

    getAuthedUserId = () => this.auth.currentUser ? this.auth.currentUser.uid : null;


    /* *** Writing data *** */

    createNewList = (userId) => {
        return this.db.collection(LISTS).add({
            ...listSchema,
            user: userId,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            [LIST_ITEMS]: [{
                ...listItemSchema,
                [ORDER]: 1,
            }],
        }).then(listRef => listRef.get());
    };

    saveList = (listId, data) => {

    };

    deleteList = (listId) => {
        // remove list from user
        // remove list
        // remove listItem
    };

    createNewListItem = (listId, order) => {

    };

    updateListItems = (listItemsId, data) => {

    };


    /* *** Reading data *** */

    getList = (listId) => {
        return this.db.collection(LISTS).doc(listId).get();
    };

    getUsersLists = (userId) => {
        // get users/lists
        // then get lists for each id
    };

    getPublicLists = () => {
        // get lists, paginated
    }
}

// When ready to deploy, create prod version of firebase project
// "An alternate way to implement this is to specify a dedicated .env.development and .env.production file"

export default Firebase;
