// Question forty three, forty four & forty five 
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to add "the Great" suffix to magician names and return a new array
function make_great(magicians) {
    var modifiedMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        modifiedMagicians.push(magicians[i] + " the Great");
    }
    return modifiedMagicians;
}
// Example array of magician names
var magicians = ["Alice", "David", "Chris"];
// Call the make_great function with a copy of the magicians array
var greatMagicians = make_great(__spreadArray([], magicians, true)); // Use spread operator to create a shallow copy
// Function to display magician names from an array
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Call show_magicians function with both original and modified arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);
// Function to summarize a sandwich order
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    items.forEach(function (item) {
        console.log("- ".concat(item));
    });
}
// Example calls to the orderSandwich function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss Cheese", "Mustard");
orderSandwich("Tuna Salad");
// Function to store information about a car in an object
function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    options.forEach(function (option) {
        car[option[0]] = option[1];
    });
    return car;
}
// Example call to the createCar function with required information and additional options
var myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
// Print the object to check if all information was stored correctly
console.log(myCar);
