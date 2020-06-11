const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

let string1 = 'string';
let number1 = 10
let boolean1 = true
let array1 = [1, 'bob'];
let object1 = document.querySelector('h2');

/*
Comment
// line break
 */

let myButton = document.querySelector('button');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
}

myButton.onclick = function () {
    setUserName();
}

myName = localStorage.getItem('name');
if(myName || myName !== null) {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
}

