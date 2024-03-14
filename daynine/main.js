// Question twenty five, twenty six, & twenty seven
var alien_color = "green";
// Test 1: Check if alien_color is green
if (alien_color == "green") {
    console.log("You just earned 5 points!"); // Output: "You just earned 5 points!"
}
alien_color = "red";
// Test 2: Check if alien_color is green (false condition)
if (alien_color == "green") {
    // No output because the condition is false
}
alien_color = "yellow";
// Test 3: Check if alien_color is green (false condition)
if (alien_color == "green") {
    // No output because the condition is false
}
var alien_colour = "green";
// Test 4: Check if alien_colour is green 
if (alien_colour == "green") {
    console.log("You just earned 5 points!"); // Output: "You just earned 5 points!"
}
else {
    console.log("You just earned 0 points!");
}
alien_color = "green";
// Test 5: Check if alien_color is green and provide points based on color
if (alien_color == "green") {
    console.log("You earned 5 points."); // Output: "You earned 5 points."
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points.");
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
alien_color = "yellow";
// Test 6: Check if alien_color is yellow and provide points based on color
if (alien_color == "green") {
    console.log("You earned 5 points.");
}
else if (alien_color == "yellow") {
    console.log("You earned 10 points."); // Output: "You earned 10 points."
}
else if (alien_color == "red") {
    console.log("You earned 15 points.");
}
