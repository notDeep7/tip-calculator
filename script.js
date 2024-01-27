// banana = prompt('What is your name');
// console.log(banana);

// Lesson -1 (JAVASCRIPT 101)

/*
    food = Number(prompt('how much was the fruit?'));
    tipPercentage = Number(prompt('How much was the percentage')) / 100;
    tipAmount = food * tipPercentage;
    totalAmount = food + tipAmount;
    console.log(`tip:${tipAmount}`);
    console.log(`total:${totalAmount}`);
*/

//Lesson - 2 (BABY WEATHER APP)

/*
let weather = prompt('How was the day today?');

if(weather == 'rain'){
    console.log('Grab your umbrella ☔');
}else if(weather == 'sunny'){
    console.log('Wear your sunglasses 😎');
}else {
    console.log('Have a great day!');
}
*/
/*

let nameYour = prompt('What is your name?');

function sayName(nameYour) {
console.log(`Hi , ${nameYour} how are you!`);
}

sayName(nameYour);*/

// MINI - PROJECT(TIP CALCULATOR)
/*
const sum = (a,b)=>{
    return a+b;
}
const tipFood = (food , price) => {
tipPercentage = price/ 100;
tipAmount = food * tipPercentage;
totalAmount = sum( food ,tipAmount);
console.log(`tip:${tipAmount}`);
console.log(`total:${totalAmount}`);
}

tipFood(100 , 20);*/

// EXERCISES RELATED FUNCTIONS
/*
const addNum = (a,b) => {

    return a+b;
}
const subNum = (a,b) => {

    return a-b;
}
const mulNum = (a,b) => {

    return a*b;
}
const didNum = (a,b) => {

    return Math.floor(a/b);
}

console.log(addNum(5,6));
console.log(subNum(5,6));
console.log(mulNum(5,6));
console.log(didNum(5,6));*/

// Add elements in array
/*
const groceries = ['appple' , 'banana' , 'cherry'];
console.log(groceries);

groceries.push('lemon');
console.log(groceries);

console.log(groceries.slice(0,1));
console.log(groceries);

console.log(groceries.indexOf('banana'));
console.log(groceries.length);*/

//Object Basics
/*
const qazi = {
    name: 'deep',
    gender: 'male',
    phone: '1-222-3333-4444'
}
//Dot Notation

console.log(qazi.name);
console.log(qazi.gender);
console.log(qazi.phone);

//Bracket Notation

console.log(qazi['name']);
console.log(qazi['gender']);
console.log(qazi['phone']);

//Adding the elements objects
qazi.color = 'black';
console.log(qazi);
qazi['roll'] = 3456;
console.log(qazi);

//Arrow function in objects

const introducer = (name , gender) => {
    const dummy = {
        name: name,
        gender: gender,
    }
    const intro = `Hi ${dummy.name} , you're ${dummy.gender}  `
    return intro;
}
const hi = introducer(qazi.name , qazi.gender);
console.log(hi);*/
/*
let result = [];
const number = [1,2,3,4,5];
for (const numbers of number)
{
    console.log(numbers);
    result.push(numbers*2);
    
}
console.log(result);
*/ /*
let result;

const howManyLetters = () => {
    
    const phrase = prompt('Write a sentence!');
    for(const letters in phrase){
        // console.log(letters);
         result = (Number(letters)+1);
        return result;
    }


}
howManyLetters();*/
/*
let len = prompt('Write your name!');
let result = len.length;
document.getElementById("test").innerHTML = result;
*/
/*
const addArray = () =>{
    let result = 0;
    let arrayOne = [1,2,3,4,5];
    for (i in arrayOne) {
        result +=Number(arrayOne[i]);
        
    }
    console.log(result);
    return {result};
}
addArray();*/
/*
const numbers = [1,2,3,4,5];
const addArray = () => {

    let result = 0;
    for(number of numbers){
        console.log(number);
        result = result + numbers;
    }
    console.log(result);
}
addArray(numbers);*/
//checking the word frequency
/*
const phrase = prompt('Enter your phrase: ');
const data = prompt('Enter the data to check: ');
const checkNum = (phrase,data) => {
    
    let count = 0;
    
    for (const letters of phrase) {
        if (letters == data) {
            count++;
        } else {
            
        }
        
    }
    console.log(`Total count: ${count}`);
}
checkNum(phrase,data);*/

//checking the letter frequency

// const letterFreq = (phrase) => {

//     let freq = {};
//     for(const letters of phrase){
//         if (letters in freq) {
//             freq[letters] +=1;
//         } else {
//             freq[letters] = 1;
//         }

//     }
//     console.log(freq);
// }
// letterFreq('deep');

//higher order functions
//map
//filter
//reduce
// [1,2,3,4].map(number => console.log(number))
// [1,2,3,4].map(number => {console.log(number) ,console.log('hahah')})

// let result = [1,2,3,4].map(numbers => numbers*2)
// console.log(result);
/*
const nums = [1,2,3,4,5,3,2]
console.log(nums.filter(num => num>=3));*/

// const actor = [
//   { name: "Robert", netWorth: 120000 },
//   { name: "Deep", netWorth: 67000 },
//   { name: "annaya", netWorth: 34000 },
// ];
// let result = actor.filter((actor) => actor.netWorth > 34000);
// console.log(result);

// let title  = document.getElementById('title')
// console.log(title.innerText);
// title.innerText = 'GoodBye'
// title.style.backgroundColor = 'red';

// let pTag  = document.getElementById('pTag')
// pTag.innerText = 'GoodBye'

// let redDiv = document.getElementById("red");
// let yellowDiv = document.getElementById("yellow");
// let greenDiv = document.getElementById("green");

// redDiv.onclick = () => {
//     console.log('You click rock');

// }
// yellowDiv.onclick = () => {
//     console.log('You click paper');

// }
// greenDiv.onclick = () => {
//     console.log('You click scissors');

// }

// COLORS TAPPING GAME

// const squares = document.querySelectorAll(".colorSquare");
// console.log(squares);
// // console.log(squares[0].value);
// // console.log(squares[1].value);
// // console.log(squares[2].value);
// const timesClicked = {'red':0,'yellow':0,'green': 0 };

// squares.forEach((squares) => {
//   squares.onclick = () => {
//     // console.log(squares.value);

//     timesClicked[squares.value] +=1
//     squares.innerText = timesClicked[squares.value];
//   };
// });

// const clearGameDiv = document.getElementById('clearGame');
// function clearScores() {
//     timesClicked.red = 0
//     timesClicked.yellow = 0
//     timesClicked.green = 0
//     squares.forEach(squares => squares.innerText = 0);
// }
// clearGameDiv.onclick = () => clearScores();
//---------------------------------------------------------------

/* 
🌟 APP: Tip Calculator

These are the 3 functions you must use 👇
=========================================
calculateBill()
increasePeople()
decreasePeople()

These functions are hard coded in the HTML. So, you can't change their names.

These are all the DIV ID's you're gonna need access to 👇
========================================================
#1 ID 👉 'billTotalInput' = User input for bill total
#2 ID 👉 'tipInput' = User input for tip
#3 ID 👉 'numberOfPeople' = Current number of people you're splitting the bill between
#4 ID 👉 'perPersonTotal' = Total dollar value owed per person
*/

// Get global access to all inputs / divs here (you'll need them later 😘)
// bill input, tip input, number of people div, and per person total div



// Get number of people from number of people div


// ** Calculate the total bill per person **
const calculateBill = () => {
    // get bill from user input & convert it into a number
    
  
    // get the tip from user & convert it into a percentage (divide by 100)
    
  
    // get the total tip amount
    
  
    // calculate the total (tip amount + bill)
    
  
    // calculate the per person total (total divided by number of people)
  
  
    // update the perPersonTotal on DOM & show it to user
  
  }
  
  // ** Splits the bill between more people **
  const increasePeople = () => {
    // increment the amount of people
  
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
  
  }
  
  // ** Splits the bill between fewer people **
  const decreasePeople = () => {
    // guard clause
    // if amount is 1 or less simply return
    // (a.k.a you can't decrease the number of people to 0 or negative!)
  
    
    // decrement the amount of people
  
  
    // update the DOM with the new number of people
  
  
    // calculate the bill based on the new number of people
  
  }