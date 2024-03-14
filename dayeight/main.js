// Question twenty two, twenty three & twenty four 
var guests = ["Sylvia Plath", "Marie Curie", "Harper Lee", "Narges Mohammadi", "Claudia Goldin", "Ada Lovelace"];
// Intentional error: accessing an index that is out of bounds
console.log(guests[10]); // Accessing index 10 which doesn't exist
// Corrected code: accessing a valid index
console.log(guests[3]); // Accessing index 3
var color = 'red';
// Test 1: Is color equal to 'red'?
console.log("Is color == 'red'? I predict True.");
console.log(color == 'red'); // True
// Test 2: Is color equal to 'blue'?
console.log("Is color == 'blue'? I predict False.");
console.log(color == 'blue'); // False
var x = 5;
var y = 10;
// Test 3: Is x greater than y?
console.log(x > y); // Predicted result: false
// Test 4: Is x less than or equal to y?
console.log(x <= y); // Predicted result: true
// Test 5: Is x equal to y?
console.log(x == y); // Predicted result: false
// Test 6: Is x not equal to y?
console.log(x != y); // Predicted result: true
// Test 7: Is x greater than or equal to y?
console.log(x >= y); // Predicted result: false
// Test 8: Is the remainder of 10 divided by 3 equal to 1?
console.log(10 % 3 == 1); // Predicted result: true
var today = 'march';
// Test 9: Is today equal to 'march'?
console.log("Current month == 'march'? I predict True.");
console.log(today == 'march'); // True
// Test 10: Is today equal to 'february'?
console.log("Current month == 'february'? I predict False.");
console.log(today == 'february'); // False
// Equality with strings
console.log("Testing equality with strings:");
console.log("scholar" == "apple"); // False
console.log("scholar" == "Scholar"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Scholar".toLowerCase() == "scholar"); // True
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(5 > 3 || 6 === 3 * 2); // True
// Test whether an item is in a array
var companies = ["Tesla", "Microsoft", "Meta"];
console.log("Is 'Meta' in companies?");
console.log(!companies.includes("Meta")); // False
// Test whether an item is not in a array
console.log("Is 'Dior' not in companies?");
console.log(companies.includes("Dior")); // False
