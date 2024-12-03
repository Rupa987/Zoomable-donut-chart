
//zoya yedi hai
// Should be meaningful

let firstname1 = 'mubarak';
let lastname = 'dalvi';

 console.log(firstname1,lastname);

 let Firstname = 'mubarak';
 let Lastname = 'dalvi';
 let firstname2 = 'Shahnawaz Dalvi';

 console.log(firstname2);

let name = 'mubarak'; // this is string
let age = 24;
let isApproved = false;
let firstname = undefined;
let selectedColor = null;
typeof firstname;

let person = {
    name: 'mubarak',
    age: 24
};

// dot notation
person.age = 23;
// bracket notation 
person['name'] = 'mubarak dalvi';
console.log(person);
let what = 'name';
person[what] = 'mubarak';
console.log(person);


let selectedColor1 = ['red','blue','white'];
selectedColor1[1] = 1;
console.log(selectedColor1[1]);
console.log(selectedColor1); // just like python it is easy but we have to be care full
console.log(selectedColor1.length); // this is methods

// creating function in js

function greet(name,sname) {
    console.log('Hello ' + name  + sname);
}

greet('jhon',' dove');
greet('mubrak', ' dalvi');

function calculate(num1,num2) {
    return num1 + num2;
}

console.log(calculate(1,5));

console.log('Mubarak Dalvi');

my_name = 'Mubrak';
my_name = 'Mubarak Dalvi';
age = 24.6;
my_age_without_month = 24;
my_bride = undefined;
my_salary = null;
my_name_is_not_false = true;

console.log(my_name,age,my_age_without_month,my_bride,my_salary);

function circle(pie,r){
    return 'area of circle is : ' +  pie * r ** 2
}
console.log(circle(3.14,4));


function my_details(name,age,address,mobile_number,blood_group){
    return 'My Name is ' + name + ' my age is ' + age + ' my mobile number is ' + mobile_number + ' my address is ' + address + ' my blood group is ' + blood_group
}
console.log(my_details('Mubarak Dalvi',24,'102,sajid apartment kalkai kond dapoli ratnagiri-415712',9146911874,'O+ve'));
