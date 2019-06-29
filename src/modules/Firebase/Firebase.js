import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

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
const LIST_ITEMS = 'listItems';

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
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

    getAuthedUserId = () => this.auth.currentUser ? this.auth.currentUser.id : null;


    /* *** Writing data *** */

    createNewList = () => {
        const userId = this.getAuthedUserId();
        const newListItemsId = this.db.ref(LIST_ITEMS).push().key;

        const newListId = this.db.ref(LISTS).push({
            [LIST_ITEMS]: newListItemsId,
            users: {
                [userId]: 'creator',
            },
        }).key;

        const updates = {};

        // Set the list on the list items set
        updates[`/${LIST_ITEMS}/${newListItemsId}/list`] = newListId;

        // Associate the list to the user
        updates[`/${USERS}/${userId}/${LISTS}/${newListId}`] = 'creator';

        this.db.ref().update(updates);
    };

    saveList = (listId, data) => {
        // save list
        // & save list items
    };

    deleteList = (listId) => {
        // remove list from user
        // remove list
        // remove listItem
    };

    updateListItems = (listItemsId, data) => {
        // save list items
    };


    /* *** Reading data *** */

    getList = (listId) => {
        // get list
        // get list items
        // get user?
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
