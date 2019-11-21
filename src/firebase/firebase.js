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

export { firebase, database as default };

// // child_removed subscriber
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_changed subscriber
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// // child_added subscriber. Fires 1 time for all of the data on that location +
// // re-runs on all new ones added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// /* database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// }); */

// /* database.ref('expenses').push({
//     description: 'Second expense',
//     note: 'Nothing really usefull',
//     amount: 5643,
//     createdAt: 2132423430492
// }); */


// //database.ref('notes/-Lu7s38HA4hXQJo-9KdO').remove();

// // The way to work with list data such as a list of Expenses
// /* database.ref('notes').push({
//     title: 'Course topic',
//     body: 'Something about firebase'
// }); */



// // READ
// // '.on()' is a subscription method. We subscribe to the changes in the reference location
// // '.off()' is used to unsubscribe
// // '.once()' fetches the data once, doesn't subscribe
// /* const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(27);
// }, 4000);

// setTimeout(() => {
//    database.ref().off(onValueChange);
// }, 8000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 12000); */

// /* database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });
//  */
// // it's not possible to run promisses to listen to changes because promises only get called once; either resolve() or rejected()
// /* database.ref('location/city').once('value')
// .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
// }).catch((e) => {
//     console.log('Error fetching data', e);
// }); */

// // INSERT
// /* database.ref().set({
//     name: 'Matko Smoki',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Ulan Bator',
//         country: 'Mongolia'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed.', e);
// }); */

// // REMOVE
// /* database.ref('isSingle').remove().then(() => {
//     console.log('Data removed');
// }).catch((e) => {
//     console.log('Something failed.', e);
// }); */

// // OR
// /* database.ref('isSingle').set(null); */


// // UPDATE
// /* database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }); */
