import buttonInit from "./src/onClickEvents.js";
import { alternativeFunc as af } from "./src/onClickEvents.js";

import newArray from "./src/mutateTypes.js";

// select elements on the page:
const app = document.querySelector("#app");
let button = document.querySelector("#app>button");

// DOM Parents and Children
// Parents
console.log(app.parentElement);
// GrandParents
console.log(app.parentElement.parentElement);
// children
console.log(app.children[0]);

// add an event listener for when the page loads
window.addEventListener("load", () => {
  buttonInit(button);
});

// change the window on load functionality (bad idea, mutates the type)
window.onload = () => {
  console.log("page loaded");
};

window.addEventListener("keydown", (e) => {
  e.preventDefault();
  console.log(event);
  if (event.key === "w") {
    app.textContent = "Moving Forward";
  } else if (event.key === "s") {
    app.textContent = "Moving Back";
  } else if (event.key === "a") {
    app.textContent = "Moving Left";
  } else if (event.key === "d") {
    app.textContent = "Moving Right";
  } else if (event.key === " ") {
    app.textContent = "Jumping";
  }
});

// mutating the type problems
console.log(newArray);

const otherNewArray = [...newArray];

console.log(otherNewArray);

// Rest operator
const shoppingList = ["milk", "eggs", "bread"];
const copyOfShoppingList = [
  "cheese", // top item in list
  ...shoppingList, // the rest of the items are from shoppingList
];

//
// Arr.map()
// array.map() returns an array of items from another array that we have performed an
// action on, we write a callback function to perform this action
//

// initial array
const arrayOfColors = [
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "pink",
  "purple",
];

// callback function
const actionToPerformOnEachItem = (color) => {
  return color.toUpperCase();
};

// upper case array
const upperColorsArray = arrayOfColors.map(actionToPerformOnEachItem);

// longer method using a forEach loop and an external array let
let daftMapMethod = [];
upperColorsArray.forEach((color) => {
  daftMapMethod = [color.toUpperCase(), ...daftMapMethod];
});

// log results
console.log(daftMapMethod);

const listOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(listOfNumbers.map((num) => num / 2));

// callback functions
// we can use a function as the argument for another function

const callerFunction = (val, cb) => {
  let x = cb(val);
  return x;
};

const add2 = (val) => {
  return val + 2;
};
const sub2 = (val) => {
  return val - 2;
};
const div2 = (val) => {
  return val / 2;
};
const mult2 = (val) => {
  return val * 2;
};

const result = callerFunction(6, sub2);

console.log(`callback result: ${result}`);
