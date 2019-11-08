/* ES6 Object Destructuring */

const person = {
    name: 'Andrew',
    age: 22,
    location: {
        city: 'Philadelphia',
        temp: 88
    }
};

// ES6 object destructuring
const {name: firstName = 'Matko', age} = person;
/* const firstName = person.name;
const age = person.age; */

console.log(`${firstName} is ${age}.`);

/* if (person.location.city && person.location.temp) {
    console.log(`It's ${person.location.temp} in ${person.location.city}`)
} */

const {city, temp: temperature} = person.location;
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`)
}


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-published'} = book.publisher;
console.log(publisherName);


/* ES6 Array Destructuring */

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [, town, state = 'New York'] = address;
console.log(`You are in ${town} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);