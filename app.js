console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);


// Exercise 1 Section
let myNum = 7;
let userNum = prompt("Enter a number");

if (userNum > myNum) {
  console.log("Too high!");
} else if (userNum < myNum) {
  console.log("Too low!");
}
else {
  console.log("Congratulations!");
}

// Exercise 2 Section
let userBirthMonth = prompt("What is your birth month?").toLowerCase();

switch (userBirthMonth) {
  case "december":
  case "january":
  case "february":
    console.log("You were born in the winter!");
    break;
  case "march":
  case "april":
  case "may":
    console.log("You were born in the spring!");
    break;
  case "june":
  case "july":
  case "august":
    console.log("You were born in the summer!");
    break;
  case "september":
  case "october":
  case "november":
    console.log("You were born in the fall!");
    break;
  default:
    console.log("That doesn't seem to be a valid month.");
    break;
}

// Exercise 3 Section

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

/*
if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}

if (colorId == "BK") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}

if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}
*/

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
    break;
}

switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
    break;
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
    break;
}

console.log(`Product: ${size} ${color} ${type}`);