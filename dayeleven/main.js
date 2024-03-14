// Question thirty one, thirty two & thirty three
var usernames = [];
// Test 1: Check if the array is empty
if (usernames.length === 0) {
    console.log("We have no users!"); // Output: "We have no users!"
}
else {
    console.log("Hi users!!");
}
var usernams = ["Sanika", "Sana", "Laaibah"];
// Test 2: Check if the array is empty
if (usernams.length === 0) {
    console.log("We have no users!");
}
else {
    console.log("Hi users!!"); // Output: "Hi users!!"
}
var previous_users = ["Sanika", "admin", "Laaibah", "Ali"];
var new_users = ["sanika", "user_1", "Sam5", "Laa1bah"];
// Test 3: Check for duplicate usernames in the new_users array
new_users.forEach(function (newUser) {
    if (previous_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test 3: Adding ordinal suffix to numbers 1 to 10
numbers.forEach(function (number) {
    var suffix = "th";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    console.log("".concat(number).concat(suffix));
});
