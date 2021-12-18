// let first = "Happy Coding";
// console.log(first)
// // alert("HEllo")

// function programming(){
//     let name = "Springboard Bootcamp";
//     return name
// }
// programming()  you can call this in console

// try catch for error handling
// try{
//     apple();
// }
// // catch {
// //     console.log("error happened")
// // }
// catch(e) {
//     console.log(e);
// }

// First class function- a function that can be stored in a variable, that can be used in other function as arugment, and that can be returend too.


// function hello(){
//     console.log("Hello coding world")
// }

// function callAnotherFunc(sayHi){
//     sayHi();
//     sayHi();
//     sayHi();
//     sayHi();
//     sayHi();
//     sayHi();

// }

// // callAnotherFunc(hello);   // you can call this in console

// // store funciton in  variables
// const func1 = function happyHours(){
//     return "Happy to code here";
// }

// DOM Manipulation
h = document.querySelector('h1');    //retrieve h1 element
h.style.backgroundColor = "orange";   // assign it orange color

// Direct access attribute using id or value in html form
valueInform = document.querySelector('input[type="text"]');
// valin = valueInform.value;   // it does not retrieve if you put this in variable
// clear it and put in the new value to see the difference
valueInform.value = "";
// Now give a new value to the form value attribute
valueInform.value = "Happy Coding" // this should show as placeholder text
valueInform.value;


// class manipulation
// classList
elementThatHasClass = document.querySelector('p');
elementThatHasClass.classList.add("coding"); // adds another class to the existing class in that element

// togggle this class, "engineering", this this code in console repeatedly and watch the browser
getElementToToggle = document.querySelector('small');
// when you toggle, just put strike through, this should be done in css file
getElementToToggle.classList.toggle("engineering") 

function useClassList(){
    // retrieve an element that contains that particular class
    pElement = document.querySelector('p');   // this gives a list like an array
    // pElement.classList.add('engineering');
    // for(let item in pElement){
        pElement.classList.toggle('engineering');  // engineering is a class inside <p> tag 
    // }
}