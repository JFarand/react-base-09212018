//const person = {
//	name: 'OWL',
//	age: 41,
//	location: {
//		city: 'Baltimore',
//		temp: 99
//	}
//};
//
//const book = {
//	title: 'Ego is the Enemy',
//	author: 'Ryan Holiday',
//	publisher: {
//		name: 'Penguin'
//	}
//};
//
//
//const { name, age, location  } = person;
//const { city, temp } = location;
//const name2 = person.name;
//const age2 = person.age;
//
//console.log(`It is ${temp} in ${city}`);
//console.log(`${name} is living in ${location.city}`);
//console.log(`${name2} is ${name2}`);
//console.log(`${person.name} is ${person.age}`);
//
//
//const {publisher} = book;
//const { name: publisherName = 'Self-Published' } = publisher;
//console.log(publisherName);

//
//Array Destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, city, state, zip] = address;

console.log(`You are on ${street} in ${city}`);
console.log(`You are in ${address[1]} ${address[2]}`);

const item = ['Coffee(hot)', '$2.00', '$2.50', '$2.75'];

const [ product, small, med, large ] = item;

console.log(`A medium ${product} cost ${med}`);


