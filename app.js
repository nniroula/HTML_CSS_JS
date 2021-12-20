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
// getElementToToggle = document.querySelector('small');
// // when you toggle, just put strike through, this should be done in css file
// getElementToToggle.classList.toggle("engineering") 

function useClassList(){
    // retrieve an element that contains that particular class
    pElement = document.querySelector('p');   // this gives a list like an array
    // pElement.classList.add('engineering');
    // for(let item in pElement){
        pElement.classList.toggle('engineering');  // engineering is a class inside <p> tag 
    // }
}

// create an element, create second element and append second element to the first one
// create div element and append it to boxy, create ul and append it to div, create li and append it to ul
newDiv = document.createElement('div');
// append it to body
//  first get body to append div
bdy = document.querySelector('body');
// now add div to body
bdy.append(newDiv);
//  create ul and add it to div
ul = document.createElement('ul')
newDiv.append(ul)
// create li and append ot ul
li = document.createElement('li');
ul.append(li)
// create some text that goes inside li
li.innerHTML = "Coding Fun";
// add a class to div element
newDiv.classList.add("div-class"); // element.classList.add("class name")

//  create an image tag and append it to body or div
newImg = document.createElement('img');
// set attribute of src to it
newImg.setAttribute('src', 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg')  // image link from google
// append this image to div

newImg.classList.add("pictureClass");   // set dimension for the image in css, for that to happen add class to it here
newDiv.append(newImg);  

// add an evenlistener in js file
function addColor(color){
    document.body.style.backgroundColor = color;
}
// select the button to apply event listener
btn = document.querySelector("#code-code");
// apply event listener onclick
btn.onclick = function(){
    addColor('purple');     // works, gives a quick flash of background color
}


/*
// Add Event listener here

function changeColor(color){
    document.body.style.backgroundColor = color;
}
// select a button
bttn = document.querySelector("#changeColor");
// Now use an addEventListener() function
bttn.addEventListener('click', function(){
    // this anonymous function calls another function to change color
    changeColor('brown');
});

bttn.addEventListener('mouseover', function(){
    // this anonymous function calls another function to change color
    changeColor('green');
});
*/

// callback functions(functions as return values)

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return y - x;
}

function multiply(x, y){
    return x * y;
}

function doMath(a, b, func){    // this function accepts another funciton as callback
    return func(a, b);
}

// anonymous function as callback






