// const person = {
//     name: 'Rodrigo',
//     age: 29,
//     location: {
//         city: 'Sjc',
//         temp: 21
//     }
// };

// // const name = person.name;
// // const age = person.age;
// const { name: firstName = 'Anonymous', age } = person;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;
// if(city && temperature){
//     console.log(`It's ${temperature}ºC in ${city}`);
// }

const address = ['1299 S Juniper Street', 'jacacity', 'SP', '551020'];
const [, city, state] = address;
console.log(`You are in ${city} ${state}.`);