
/* learning the js */

console.log('Hello, World');

let a = 10;
let b = 15;

// arithmatic operators 
console.log('a = ', a, 'b = ',b,'a + b = ' , a + b, 'a - b', a - b, 'a * b', a * b, 'a / b', a / b);

// modulus 

console.log('a % b = ' , a % b);

// exponentiation 

console.log('a ** b =' ,a ** b);

// unary operato
// inceament 
a ++; // this will changes effect in next line , this is post increament
a --; // same for this as above , this is post decreament 
++a; // this changes the value on the same line , this is pre increamnet
--a; // same as above , this is pre decreament
console.log('increament of a by b = ',a); 

// assignment operators

a += 1;
console.log('a +=  = ',a);
b -= 1;
console.log('a -=  =', b);
a *= 2;
console.log('a *=  = ',a );
a/= 5;
console.log('a /=  =',a);
a %= 5;
console.log('a % 5 = ',a);
a **= 4;
console.log('a **  4  =',a);

// comparison operator

console.log('a == b',a == b);
console.log('a != b',a != b);
console.log('a > b',a > b);
console.log('a < b',a < b);
console.log('a <= b',a <= b);
console.log('a >= b',a >= b);
a = '14';
console.log('this will compare string with a number',a == b); // this will compare string with a number as js code is so fast in compiling 
// stricter version of equal to 

console.log('this is strict it doesnt allow to compare string with number : ',a === b);

console.log('This is strict not equal to allow to compare number with number , will not compare string with number : ', a !== b);

// logical operator 
a = 14;


let condi1 = a > b; //false
let condi2 = a === b; //true , before that i was getting false cause of declaring variable after 
/* new varible creation as a = 14 after condi2 as a variable was declared 
as i had a varible a with value '14' as a = '14' so in the comparision operator i was getting error due to strict comparison operator that
is === */


console.log('condition 2',condi2);

// and operator

console.log('condi1 && condi2 :', condi1 && condi2);
// in above both statement have to be true otherwise will get result false

// or operator

console.log('condi1 || condi2 :', condi1 || condi2);
// in the above statement one condition have to be true then result will be true 
// if both condtions are false then result will be false

// not 
// this will give opposite result of coditions 
// as condi1 will give true and condi2 will false

console.log('condi1 is false but true with not operator', !condi1);
console.log('condi2 is true but will be false as above : ',!condi2 );


// conditional statements 
// if statement

let age = 17;
if (age >= 18){
    console.log('You Can Now DRIVE');
}

if (age < 18){
    console.log('You Are Nor Ready For DRIVE');
}


let mode = 'light';
let color;

if (mode === 'light'){
    color === 'white';
    console.log('Light Mode Is Enabled');
}
if (mode === 'dark'){
    color === 'black';
    console.log('Dark Mode Is Enabled');
}

// if-else statement

if(mode === 'dark'){
    color = 'black';
    console.log('Dark Mode Is Enabled');
} else {
    color = 'white';
    console.log('Light Mode Is Enabled');
}

let my_age = 18;
if(my_age >= 18){
    console.log('You Are Adult');
}else {
  console.log('You Are Not Adult');
}

// odd even with conditional statement
let x = 15175515984563;
if (x % 2 === 0){ // must use === for strictly for number only for  checking
    console.log('Even');
}else{
    console.log('Odd');
}
// else if statement 

age = 55;
if (age < 18){
    console.log('You Are Not Adult');
} else if (age >= 55){ 
    console.log('You Are Old');
}else {
    console.log("Your Are Adult");
}

// ternary operator

age = 17;
age >= 18 ? console.log('adult') : console.log('not adult');
// above is simpler and compact if else statement in js

let expr = 'papayas';
switch (expr) {
    case 'oranges' :
        console.log('oranges are 964$');
        break
    case 'mangoes' :
        console.log('mangoes are 5458$');
        break;
    case 'bananas':
        console.log('bananas are 65477$');
        break;
    default:
        console.log('Sorry, we are out of ${expr}.');
}
// escape character 
let name = 'Mubarak Dalvi';
console.log(name.length); // this will give length
console.log('Mubarak\nDalvi','Mubarak\tDalvi','Mubarak\rDalvi'); // these are esscape characters
console.log(name.toUpperCase()); // this will convert string to uppercase , it is a function cause it is with paranthesis ()
console.log(name.toLowerCase()); // thsi convert string to lowercase
console.log(name.slice(0,7)); // this is to slice a string
console.log(name.replace('Dalvi','Bhai')); // this will repace 
console.log(name.trim('Bhai')); // this will trim the string
