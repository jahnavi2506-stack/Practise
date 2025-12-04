//Variables
let num1 = 4; //as we are modifying use let
let num2 = 2;
const num3 = 4.5;
const num4 = -4.5;
const myVar = 'A string';
const myVar2 = 'B string';

/*prints result*/
console.log(num1 + num2); //6
console.log(num1 - num2); //2
console.log(num1 * num2); //8
console.log(num1 / num2); //2

//Floating point inaccuracy
console.log(0.1 + 0.2); //0.3
console.log(0.2 * 0.4); //0.8
console.log(4 % 2); //0
console.log(2 ** 3); //8

num1 = num1 + 1;
console.log(num1);//5
 num2--;
 console.log(num2);//1

 console.log(num1 >= num2);//true
 console.log(num1 > num2);//true
 console.log(num1 <= num2);//false
 console.log(num1 < num2);//false[5<1]
console.log(num1 == num2);  // loose equality,false
console.log(num1 === num2); //strict equality,false
console.log(num1 != num2);//true
console.log(num1 !== num2);//true

//Nan
console.log(num1 * 'A string');

//Infinity
console.log(9_000_000 ** 9_000_000);
console.log(Number.NEGATIVE_INFINITY);
 
console.log(Math.PI);
console.log(Math.sqrt(25));//5
console.log(Math.pow(2,3));//8
console.log(Math.round(6.6));//7
console.log(Math.ceil(6.3));//7
console.log(Math.floor(7.9));//7
 
//converting
console.log(myVar + myVar2);//A stringB string
console.log(myVar + num1);//A string5

//string to a number
console.log(parseInt("2") + 2);//4

//Number to a string
console.log(2 + '');"2"
console.log(`${2}`);//"2"

//BigInt
let maxInt = BigInt(Number.MAX_SAFE_INTEGER);
console.log(maxInt);
maxInt++;
console.log(maxInt);
maxInt++;
console.log(maxInt);

let bigNumber = 900013456898n;
bigNumber = bigNumber * 4n;
console.log(bigNumber);

