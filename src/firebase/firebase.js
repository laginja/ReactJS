import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6mTsAg1MC53GlwsNpKx3bXrAdQM7cd2s",
    authDomain: "expensify-8f672.firebaseapp.com",
    databaseURL: "https://expensify-8f672.firebaseio.com",
    projectId: "expensify-8f672",
    storageBucket: "expensify-8f672.appspot.com",
    messagingSenderId: "399231608949",
    appId: "1:399231608949:web:2ff9c0115d24d055e6303c",
    measurementId: "G-8C6LHLSTF6"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    name: 'Matko Smoki',
    age: 26,
    isSingle: true,
    location: {
        city: 'Singapore',
        country: 'Singapore'
    }
});

//database.ref().set('This is my data');

database.ref('age').set(27);
database.ref('location/city').set('London');

database.ref('attributes').set({
    height: 173,
    weight: 69
});