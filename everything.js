console.log("Hello World")

// variables
var firstname = "harry" ;
console.log(firstname) ;
firstname = "malik"
console.log(firstname)
let secondName = "muneeb";
secondName = "naveed";
console.log(secondName);
// console.log(thirdName);

// different methods of  legth
let something = "mughal";
console.log(something.length)
console.log(something[0])
console.log(something[5])

// trim
let string = "  father   "
string = string.trim()
console.log(string.length)

// tolowercase touppercase slice
let anything = "maLIk";
console.log(anything.toLowerCase());
console.log(anything.toUpperCase());
console.log(anything.slice(0,2));
console.log(anything.slice(2,5))

// types of operators
let age = 22
// console.log(typeof age)
// changing into eachother
let mystr = + "sheikh"
console.log(typeof mystr)
console.log(typeof (age + ""))

// string concatenation
let string1 = "harry";
let string2 = "malik";
let fullname = string1 + " " +  string2
console.log(fullname)

// template string
let Age = 18;
let beacon = 'hurarah';
let aboutMe =`my name is  + "beacon" + "and my age is" + "Age"`
console.log(aboutMe)

// tempalte string didn't work

// boolean and comparison operator
let num1 = 5
let num2 = 7
console.log(num1>num2)
console.log(num1<num2)
let num3 = 5
let num4 = 5
console.log(num1<=num4)

// == and ===
let num5 = 7
let num6 = "7";
console.log(num5 === num6)
// == data type check nhi krta === data type bhi check krta hai

// != and !==
console.log(num5 !== num6)

// similarly != data type check nhi krta but !== data type check krta hai

// if and else 

let x = 10;

if (x > 0) {
  console.log("x is positive");
} else if (x < 0) {
  console.log("x is negative");
} else {
  console.log("x is zero");
}

let myAge = 17;
if(myAge>=18) {
    console.log("user is okay");
} else {console.log("user is underaged");}

let num7 = 13;
if(num7%2===0) {console.log("num7 is even")}
else {console.log("num7 is odd")}

// ternary operator or conditional operator
let num8 = 3;
let drink = num8 >= 5 ? "coffee" : "milk"
console.log(drink)

// AND , OR operators
// THIS IS AND OPERATOR'S EXAMPLE
let myName = "harry";
let myage = 22;
if (myName[0] === "H" && myage>=18) {
    console.log("everything is okay")
} else {console.log("not okay")};
// THIS IS OR OPERATOR'S EXAMPLE
let newstr = "muneeb"
let num9 = 18
if (newstr[0] === "M" || num9 === 17){console.log(
"everything is okay"
);} else {console.log("not okay");} 

// NESTED IF AND ELSE


// let winningNumber = 19;
// let userGuess = +prompt("guess the number");
// if(userGuess === winningNumber){
//     console.log("your guess is right")
//     } else {if(userGuess < winningNumber){console.log("to low!!!")}
// else {console.log("to high!!!")}}

// ANOTHER IF ELSE IF EXAMPLE
let tempIndegree = 25 ;
if(tempIndegree < 0 ){console.log("it os freezing outside.")}
else if(tempIndegree < 15){console.log("it is cold outside.")}
else if(tempIndegree < 30){console.log("it is okay outside.")}
else if(tempIndegree < 50 ){console.log("turn on AC.")}
else {console.log("TOO HOTTT!!!!")}


// SWITCH STATEMENTS
let day = 1;
switch(day){
  case 1: console.log("Monday");
  break;
  
  case 2: console.log("Tuesday");
  break;

  case 3: console.log("Wednesday");
  break;

  case 4: console.log("Thursday");
  break;

  case 5: console.log("Fridaiy");
  break;

  case 6: console.log("Sstuurday");
  break;

  case 7: console.log("Sunday");
  break;

  default: console.log("invalid day");
}

// WHILE LOOP
let o = 3;
while(o <= 5){console.log(o);
o++;}

// ANOTHER EXAMPLE
// let num10 = 10;
let total = 0
let i = 0
while(i<=10){total=total + i;
i++;}
console.log(total)

let counter = 1;
while(counter<=10){
  let stopNumber = 5;
  console.log(`${counter}`);
  if(counter === stopNumber){console.log("counter has reached stop number");
break;}
  counter++;
}

// FOR LOOP
for(let i = 1;i<=10;i++){console.log(i)}

let newTotal = 0;
let newNum = 100;
for(let i = 1;i<=newNum; i++){
  newTotal = newTotal + i;
}console.log(newTotal)

// FOR LOOP EXAMPLE WITH BREAK KEYWORD
for(let i = 1; i<=10; i++){if(i===4){ console.log("number reached")
break;}
console.log(i)}

// FOR LOOP EXMPLE WITH CONTINUE KEYWORD
for(let i = 1; i<=10; i++){if(i===4){continue;}
console.log(i)}

// ARRAYS
let fruits = ["apple","mango","grapes"];
fruits[1] = "pineapple";
console.log(Array.isArray(fruits))

let vegatables = "bringal";
console.log(Array.isArray(vegatables))

// SHIFT AND UNSHIFT IN ARRAY
let clothes = ["pants","shirts","jeans"];
console.log(clothes.shift())
console.log(clothes);

// USE UNSHIFT TO ADD SOMETHING IN BEGINNING AND SHIFT TO REMOVE SOMETHING FROM BEGINNING

// PUSH AND POP
let kitchen = ["frying pan","cooker","spoons"]
console.log(kitchen.pop());
console.log(kitchen);

// DIFFERENT METHODS TO CONCATENATE ARRAYS
let array1 = ["item1","item2"]
// concat method
// let array2 = [].concat(array1)
// slice methhod
// let array2 = array1.slice[0]
// spread operator method
let array2 = [...array1]
console.log(array1===array2)

// FOR LOOP IN ARRAY
let anyArray = ["apple","orange","mango"]
for (let i = 0;i<anyArray.length;i++){console.log(anyArray[i].toUpperCase())}

// USING CONST TO MAKE ARRAY
const curtain = ["bed","chair","sofa"];
curtain.push("door")
console.log(curtain)

// YOU CAN PUSH AND SHIFT ETC IN ARRAYS WITH CONST BUT CANNOT ASSIGN NEW VALUE 
// ALWAYS USE CONST IN REFERENCE OBJECTS

// WHILE LOOP ON ARRAY
const newArray = ["bat","ball","wickets"];
let c = 0
while(c<newArray.length){console.log(newArray[c]);
c++;}

// FOR AND OF LOOPS IN ARRAY
const cosmetics = ["maskara","eyeliner","lipstick"];
for(let cosmetic of cosmetics){console.log(cosmetic)}

// FOR AND IN LOOPS IN ARRAY
const basicArray = ["head","eyes","hands"];
let anyVar = []
for(k in basicArray){anyVar.push(basicArray[k].toUpperCase())}
console.log(anyVar)

// ARRAY DESTRUCTURING

const advanceAArray = ["sky","moon","sun"];
let [var1, ,var2] = advanceAArray;
console.log(var1)
console.log(var2)

// if you want to skip an index then add an extra comma between variables

// OBJECT

const person1 = {name: "hurarah",age: 18}
console.log(person1)
console.log(typeof person1)

// you can also store an array in Object

const person2 = {name: "muneeb",age: 19,hobbies:["playing pubg","chatting"]}
console.log(person2)

// add another key value pair in Object
person2.gender = "male";
console.log(person2)

// USING BRACKET NOTATION TO ACCESS DATA FROM Object
const person3 = {name:"naveed",age:18,gender:"male"}
console.log(person3["name"])

// BY DEFAULT KEYWORDS ARE STRING TYPE SO ADD "" TO ACCESS THEM.
person3["father name"] = "Hurarah"
console.log(person3)

// IF YOU HAVE A VARIABLE AND WANT TO ADD ITS VALUE IN OBJECT USE BRACKET NOTATION WITHOUT "".
const  person4 = {name:"AbdulWahab",age:18,gender:"male"}
const key = "email"
person4[key]="abdulwahab@gmail.com"
console.log(person4)

// HOW TO CREATE LOOP/ITERATE OBJECt
const person5 = {name:"Ahsan nisar",age:18,gender:"male"}
for(let key in person5){console.log(person5[key])}
// in for in loop "" does not work in console.log to access values in object use the variable in for's let without "".

// to get key value pair
for(let key in person5){console.log(key,":",person5[key])}

// Object.keys
const person6 = {name:"Ali Aoun",age:18,gender:"male"}
console.log(Object.keys(person6))
for(let key of Object.keys(person6)){console.log(person6[key])}

// COMPUTED OBJECTS
const key1 = "objkey1"
const key2 = "objkey2"

const variable1 = "myvar1"
const variable2 = "myvar2"

const obj = {[key1]:variable1,
[key2] : variable2}
console.log(obj)

// to compute a value from variable in objects use thename of variable within square brackets

//another way
const obj2 = {}
obj2[key1] = "myvar3"
obj2[key2] = "myvar4"
console.log(obj2)

// to target the value of variable while working with objects use [].

// SPREAD OPERATOR IN OBJECTS
// it is same as in arrays

// OBJECT DESTRUCTURING
const anyObj = {
  bandName: "imagine dragons",
  famousSong: "enemy",
  year:"1988",
  release:"1560"
}
const anyBody = anyObj.bandName
const someBody = anyObj.famousSong
// console.log(anyBody)
// console.log(someBody)
// another method

const {bandName:myany,famousSong,...restprops}=anyObj
console.log(myany,famousSong)
console.log(restprops)

// OBJECTS IN ARRAY
const users = [{userid : 1,firstname:"harry",gender:"male"},
  {userid : 2,firstname:"muneeb",gender:"male"},
  {userid : 3,firstname:"anygirl",gender:"female"}]
// console.log(users)

// FOR OF loop
// for(let user of users){console.log(user)}
for(let user of users){console.log(user.firstname)}

// OBJECT IN ARRAY DESTRUCTURING
const newArray1 = [{username:"harry",age:18,gender:"male"},
{username:"muneeb",age:19,gender:"male"},
{username:"naveed",age:20,gender:"male"}]
const [{username:newName},,{gender}]=newArray1;
console.log(newName)
console.log(gender)

//FUNCTIONS
function singHappyBirthday(){console.log("happy birthday to you")};
singHappyBirthday();

// Amother way to write function
function twoPlusFour(){return 2+4;}
console.log(twoPlusFour())

// Using parameters in function
// function  sumOfNumbers(number1,number2){return number1+number2}
// console.log(sumOfNumbers(4,5))

// Using if and else in function to check whether number is even or odd
function isEven(number){if(number%2===0){return true;}
else{return false;}}
console.log(isEven(6))

// Else is not important you can simply write return false and if can also be excluded as below
function isOdd(number){return number % 2 === 0}
console.log(isOdd(13))

// Another example
function isString(anyString){return anyString[0];}
console.log(isString("abc"))

// finding specific number
function anyTarget(array,target){for(let i=0; i<array.length;i++)
if(array[i]===target)
{return i;}
return"not found"}
const aArray = [1,2,5,7,9]
const ans = anyTarget(aArray,10)
console.log(ans)

// FUNCTION DECLARATION (using variables to store function and the calling the variable)
const sumOfNumbers = function  (number1,number2){return number1+number2}
console.log(sumOfNumbers(4,5))

// Arrow function (name the function in variable and remove function and use arrow after paranthesis)
const sumOfNumbers2 =  (number1,number2) => {return number1+number2}
console.log(sumOfNumbers2(4,5))

// using arrow function without any brackets
const sumOfNumbers3 =  number1 =>  number1%2===0
console.log(sumOfNumbers3(4))

// HOISTING (calling function before initiallization,only works for function declaration)
hello();
function hello(){console.log("hello world")}

// FUNCTION INSIDE FUNCTION
const manyFunctions = () => {const func1 = (num1,num2) => {return num1+num2};
const func2 = (num3,num4) => {
return num3*num4};
console.log(func1(7,8));
console.log(func2(4,5))}
manyFunctions();

// Lexical Scopee (we call a function inside function and the variables with same name is overridden by the value written at the last) 

// BLOCK SCOPE AND Function SCOPE
{let firstName = "harry"
console.log(firstName)} //same with const
// let and const are block scope i.e. they cannot be used outside the block like in above example we cannot console.lo firstName outside '{}' i.e. represents block

{var myVar = "muneeb"}
console.log(myVar)

// myVar can be accessed outside "{}" so it is function scope

// DEFAULT PARAMETERS
// function myApp (a,b) { if(typeof b==="undefined"){b=1;} return a+b;}
// console.log(myApp(4));

//in the above example if b is not given than its value automatically becomes 1 but their is a better way to write it
function myApp (a,b=0) {return a+b;}
console.log(myApp(4));

// REST PARAMETERS
function App (a,b,c){console.log("a is",a)
console.log("b is",b)
console.log("c is",c)}
App(1,2,3) //this is normal function

function App (a,b,...c){console.log("a is",a)
console.log("b is",b)
console.log("c is",c)}
App(1,2,3,4,5,6,7,8 ) //...c makes the est of elements an array if we do not want array type in console log 'c is ${c)'

// LOOP IN FUNCTION 
function addAll(...numbers){let Total = 0
  for(let number of numbers){Total = Total+number;}
return Total;}
const Ans = addAll(5,5);
console.log(Ans)

// Parameter destructuring
const newObj = {secondName :"muneeb",
  gender1:"male"}
// function myMobile(obj){console.log(obj.secondName)
// console.log(obj.gender1)}
// myMobile(newObj)

//you can either use following method
function myMobile({secondName,gender1}){console.log(secondName)
  console.log(gender1)}
  myMobile(newObj)

// CALLBACK FUNCTION 

function func(callback){console.log("this is func1");
callback;}
function func3(){console.log('this is func3')} 
func(func3());

// function returning function
function anyFunc(){function moreFunc() {console.log("hello world")} return moreFunc}
const answer = anyFunc()
answer();

// ARRRAYS FOR EACH METHOD 
const numberArray = [5,2,3,4]
function babyFunction(number,index){console.log("index is", index )
console.log(`${number}*2 = ${number*2}`)}
// babyFunction(numberArray[0],0)

//or either by for let loop
for(let i = 0;i<numberArray.length;i++){babyFunction(numberArray[i],i)}

// Now doing the above thing using for each method
const anyNumber = [5,6,7,8]
function adultFunc(number,index){console.log(`index is ${index} and number is ${number*2}`)}
anyNumber.forEach(adultFunc); //or you can create function in for each that will be annonymous function

const cuteArray = [2,4,6,8];
cuteArray.forEach(function(number){console.log(`${number}*2 = ${number*2}`)})

//MAP METHOD
const javaArray = [2,3,4,5,1]
const square = function(number){return number*number;}
const newVar = javaArray.map(square);
console.log(newVar)
// map store results in array and map only works correctly with return useage.if we use console.log it will give answer but also array will come out as undefined.
// you can also create function (arrow or anyother) inside map just like insde for each
// REALISTIC EXAMPLE
const objInArray = [{startName : "harry",age : 18},
{startName : "muneeb",age : 19},
{startName : "naveed",age : 20}]
const basicName = objInArray.map((user)=>{return user.startName})
console.log(basicName)

// filter function
// gives result in array,only works with true false
const newestArray = [1,2,3,4,5,6]
function isEvener(number){return number%2===0}
const basicVar = newestArray.filter(isEvener);
console.log(basicVar)  //result will be even numbers from newestVar

function isOdder(number){return number%2!==0}
const advanceVar = newestArray.filter(isOdder);
console.log(advanceVar)  //result will be odd number from newestArray and function can also be written inside filter just like in map and forEach.

// REDUCE METHOD
const numberArrays = [1,2,3,4,5];
const sum = numberArrays.reduce((accumulator,currentValue)=>{return accumulator+currentValue})
console.log(sum);

//accumulator           currentValue            return
//  1             +          2             =        3
//  3             +          3             =        6
//  6             +          4             =        10
//  10            +          5             =        15
// you can also pass initial value for accumulator by typing it like this ,100(initial valur) after callback function
const userCart = [{tNo:1,Name:"cellPhone",price:20000},
  {tNo:2,tName:"laptop",price:30000},
  {tNo:3,tName:"tv",price:50000}];

  const TotalPrice = userCart.reduce((totalPrice,productPrice)=>{return totalPrice+productPrice.price},0)
  console.log(TotalPrice)

  //SORT METHOD
  const no = [5,9,1200,400,3000]; //1200,3000,400,5,9
  no.sort();
  console.log(no)
  //sorting method use ascii value also it treats numbers as strings that is it only looks at first number e.g.5 has 53 and 9 has 47 4 has 52 and 3 has 51 and 1 has 49 so it store as 1200 and 3000...
  //capital letters comes first as compared to small letters and it works like dictionary e.g.aabc comes first and than abc
  const newNo = [9,5,1200,3000,400];
  // newNo.sort((a,b)=>{return a-b})//for ascending
newNo.sort((a,b)=>{return b-a});//for descending
  console.log(newNo)//it changes the original array so use slice or any other method with it

  //FIND METHOD
  const bgArray = ["house","doggy","tom","jerry"]
 function isLength3(string){return string.length === 3}
// const result1 = myFunc("dog")
// console.log(result1)
const result2 = bgArray.find(isLength3);
console.log(result2)

// EVERY METHOD 
const varArray = [2,4,6,8,10]
const newResult = varArray.every((number)=>{return number%2===0})
console.log(newResult)//gives result in true or false and if even single element does not match it comes out as false

// SOME METHOD 
const mgArray = [3,5,8,9];
const result3 = mgArray.some((number)=>{return number%2===0})
console.log(result3)

// Fill METHOD 
const gArray = new Array(10).fill(-1)
console.log(gArray)
//second use is to replace elements
const kArray = [1,2,3,4,5,6,7,8,9];
kArray.fill(0,2,5)//first write the number by ehich you wanna replace then write start index and then write end index
console.log(kArray)//it changes original array

// SPLICE METHOD IN ARRAY 
const itemArray = ["item1","item2","item3"]
const deletedItem = itemArray.splice(1,1)//write the index from where to start and then the number of elemnts to delete and than what you want to insert in place of it.
console.log("deleted item",deletedItem)//it changes original array.
console.log(itemArray)

const bagArray = ["item1","item2","item3"]
bagArray.splice(1,0,"inserted item")//write the index from where to start and then the number of elemnts to delete and than what you want to insert in place of it.
console.log(bagArray)

// SET
const set = new Set([1,2,3])
console.log(set)
//you cannot repeat things in set they are not considered.
//there is no index base access in set and no order is guaranteed
//set is iterable
const setArray = ['item1','item2','item3']
const newSet = new Set();
newSet.add(1);
newSet.add(2);
newSet.add(setArray);
newSet.add(setArray);//it only counts as one as they have same address in memory
newSet.add(['item1','item2']);
newSet.add(['item1','item2']);//they are added because they have different addresses in memory
if(newSet.has(1)){console.log('1 is present')}else{'1 is not present'}
console.log(newSet);
for(let number of newSet){console.log(number)}//it shows set is iterable

// MAP DATA STRUCTURE 
const map = new Map();
map.set('firstName','muneeb');
map.set('age','19');
map.set(10,'ten');//in map structures key can be any type but in objects key is either symbol or string.
console.log(map);
//to get values in map
console.log(map.get('firstName'));
console.log(map.get('age'));
//to get all keys
// console.log(map.keys());
//to get separate keys 
for(let key of map.keys()){console.log(key)};
for(let key of map){console.log(key,Array.isArray(key))}//it gives result in array
//to destructure Array
for(let [key,value] of map){console.log(key,value)};

const user1 = {userid : 1,gender : 'male'};
const extraInfo = new Map();
extraInfo.set(user1 , {age : 18 , Name1 : 'Malik'})
console.log(user1.userid)
console.log(extraInfo)
console.log(extraInfo.get(user1))
console.log(extraInfo.get(user1).Name1)

//OPTIONAL CHAINING (?)
const basicUser = {secondName : "harryMalik"}
// address : {houseNo : 1234}};
console.log(basicUser.secondName);console.log(basicUser?.address?.houseNo)
//if we use ? it gives undefined rather than error.
console.log("KING")

// METHODS
//method means function inside objects.
function personInfo(){console.log(`person name is ${this.name2} and his age is ${this.age}`)}
const funcObj = {name2 : 'Muneeb Ali',
age :19,
about : personInfo}
// console.log(funcObj.name2)
const funcObj2 = {name2 : 'Malik Hurarah',
age :18,
about : personInfo}
funcObj.about();
funcObj2.about();

//CALL APPLY AND BIND 
//YOU CAN USE CALL I.E. FUNCTIONNAME.call TO BORROW A FUNCTION.
const funcObj3 = {name2 : 'Naveed Hurarah',
age :20,
about : personInfo};
const funcObj4 = {name2 : 'Malik Hurarah',
age :18};
funcObj3.about.call(funcObj4);
