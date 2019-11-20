const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        /* resolve({
            name: 'Matko',
            age: 26
        }); */
        reject('Something went wrong');
    }, 5000); 
});

console.log('before');

// 'data' is the argument being passed to resolve()
promise.then((data) => {
    console.log('1', data);
}).catch((error) => {                // catch fires a callback when the promise rejects
    console.log('error:', error);
});

console.log('after');