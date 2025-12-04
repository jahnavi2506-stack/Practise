const person = {
    firstName:'Andre' ,
    'lastName':'Madarang',//we can also declare as last-name,'lastName'[as a string]
    age: 20,
    isCool: false,
    hobbies:['vedio games','Guitar'],
    address: {
        street:'123 Address st.',
        city:'Toronto',
        country:'Canada',
    },
    howOldAmI: function() {// howOldAmI is a method
        console.log(`I am ${this.age} years old.`);//displays error without this keyword
    }
};
person.howOldAmI();

console.log(person.firstName);
console.log(person['last-name']);
person.hairColor = 'black';

delete person.isCool;

console.log(person)
const groupOfPeople = [
    {
        name:'Andre',
        age: 20,
    },
    {
        name:'Bob',
        age:22,
    },
    {
        name:'Sara',
        age:30,
    },
];
console.log(groupOfPeople);
