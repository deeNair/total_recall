// Example of What your JS File in VS Code should look like


/*
    Remember!!! Once you’ve completed a problem,
    COMMENT OUT YOUR WORK before moving on to the next one.
    This makes it easier to read and debug the current 
    Solution you are working on.
*/


// I. Variables & Data Types
// A. Q + A
/*
1. How do we assign a value to a variable? 
A. With the assignment operator.

2.How do we change the value of a variable?
A. using an equal operator

3.How do we assign an existing variable to a new variable?
A. ex: let oldvariable = newvariable.

4.Remind me, what are declare, assign, and define?
A:declare - declaring a new variable with  let const or var keyword.
assign - give a value to variable.
define-  when u declare and assign value to a variable.

5.What is pseudocoding and why should you do it?
A: Psuedocode defines the necessary steps to get to required output.

6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
A: 40-thinking 60- coding

...
*/



// B. Strings

//1.Create a variable called firstVariable

var firstVariable;

//2.Assign it the value of the string "Hello World"

var firstVariable = "Hello world";
console.log(firstVariable);

//3.Change the value of this variable to some number

var firstVariable = 30;

//4.Store the value of firstVariable in a new variable called secondVariable
var secondVariable = firstVariable;
console.log(secondVariable);

//5.Change the value of secondVariable to any string.

var secondVariable = "hello computer"

//6.What is the value of firstVariable?
console.log(firstVariable);
//
//7.Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
//ex: Hello, my name is Jean Valjean

var yourName = "dee"
console.log(`"Hello, my name is ${yourName}`);

// C. Booleans
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false === false);
console.log(e === 'Kevin');
console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a + a != d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// D. The Farm
//1.Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";
//2.Write code that will print out "mooooo" if the it is equal to cow
if (animal === "cow") {
    console.log("moooo");
}
//3.Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
else {
    console.log("Hey! You're not a cow.");
}

//4.Commit

// E. Driver's Ed

//1.Make a variable that holds a person's age; be semantic

let age = 15;
//2.Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

if (age < 16) {
    console.log("Sorry, you're too young.");
}

else {
    console.log("Here are the keys!");
}
//

//____________________________________________________________






// II. Loops


// A. The Basics
//1.Write a loop that will print out all the numbers from 0 to 10, inclusive

/**for(let i=0;i<=10;i++){
console.log(i);
}*/

//2.Write a loop that will print out all the numbers from 10 up to and including 400
/**for(let i=10;i<=400;i++){
    console.log(i);
    }*/


//3.Write a loop that will print out every third number starting with 12 and going no higher than 4000

for (let i = 12; i < 400; i += 3) {
    //console.log(i);
}

// B. Get even
//1.Print out the numbers that are within the range of 1 - 100
for (let i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        //console.log(i+ "<-- is an even number");
    };

}

// C. Give me Five
for (let i = 1; i <=100; i++) {

    if ((i % 3 == 0 )&& (i % 5 == 0)) {
        console.log(`I found a ${i}. three is a crowd &  high five`);
        //console.log(`I found a ${i}.high five`);
    }
    else if (i % 5 == 0) {
        console.log(`I found a ${i}.high five`);
    }
    else if (i % 3 == 0) {
        console.log(`I found a ${i}. three is a crowd`);

    }
    

}

// D. Savings account
//1.Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.Check your work! Your bank_account should have $55 in it.
let bank_account=0;
for (let i =0; i <=10; i ++) {
    //bank_account+=i;
    //console.log("my account" +bank_account);
}
console.log("my account" +bank_account);

for(let i=0;i<=100;i++){
    bank_account+=(i*2);
}
console.log("my account" +bank_account);
//_____________________________________________________________

// III. Arrays & Control Flow
// A. Talk about it:
//elements
//Do Arrays guarantee those things will be in order?
//yes
//What real-life thing could you model with an array?
//a set of numbers ,strings,objects 

// B. Easy Does It
//Create an array that contains three quotes and store it in a variable called quotes
let quotes=["abc","cda","bca"];

// C. Accessing elements
//Given the following array 
const randomThings = [1, 10, "Hello", true]

//How do you access the 1st element in the array?
randomThings[0];

//Change the value of "Hello" to "World"
randomThings[2]="World";
//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings);

// D. Change values
//Given the following array 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
ourClass[2];
//Change the value of "Github" to "Octocat"
ourClass[4]="Octocat";
//Add a new element, "Cloud City" to the array
ourClass.push("Cloud city");

// E. Mix It Up
const myArray = [5, 10, 500, 20];
//Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
myArray.push("sloan");
//Remove the 5 from the beginning of the array
myArray.splice(0,1);
console.log(myArray);
//Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("bob marley");
console.log(myArray);
//Remove the string of your choice from the end of the array.
myArray.pop();
console.log(myArray);

//Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse() method return anything?
myArray.reverse();
console.log(myArray);
//it mutates -changes the original string

// F. Biggie Smalls
let num=100;
if(num>=100){
    console.log("big number");
}
else{
    console.log("little number");
}




// G. Monkey in the Middle

let num2=10;
if(num2<5){
    console.log("little number");
}
else if(num2>10){
    console.log("big number");
}
else{
    console.log("monkey");
}


// H. What's in Your Closet?
//_____________________________________________________________


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  console.log("Kristyn is rocking that " +kristynsCloset[2]+" today!");

  //2.Kristyn just bought some sweet shades! Add "raybans" to her closet after "yellow knit hat"
kristynsCloset.splice(6,0,"rayban");
console.log(kristynsCloset[6]);
kristynsCloset[5]="stained yellow knit hat";
console.log(kristynsCloset[5]);

// IV. Functions
// A.
// B.
// C.
// D.
// E.
// F.
// G.
// H.
//_____________________________________________________________






// V. Objects
// A.
// B.
// C.
// D.
// E.
// F.
// G.
//_____________________________________________________________


// Extra
