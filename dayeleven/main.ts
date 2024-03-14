// Question thirty one, thirty two & thirty three

let usernames: string[] = [];

// Test 1: Check if the array is empty
if (usernames.length === 0) {
    console.log("We have no users!"); // Output: "We have no users!"
} else {
    console.log("Hi users!!");
}

let usernams: string[] = ["Sanika", "Sana", "Laaibah"];

// Test 2: Check if the array is empty
if (usernams.length === 0) {
    console.log("We have no users!");
} else {
    console.log("Hi users!!"); // Output: "Hi users!!"
}

let previous_users: string[] = ["Sanika", "admin", "Laaibah", "Ali"];
let new_users: string[] = ["sanika", "user_1", "Sam5", "Laa1bah"];

// Test 3: Check for duplicate usernames in the new_users array
new_users.forEach(newUser => {
    if (previous_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Test 3: Adding ordinal suffix to numbers 1 to 10
numbers.forEach(number => {
    let suffix = "th";
    if (number === 1) {
        suffix = "st";
    } else if (number === 2) {
        suffix = "nd";
    } else if (number === 3) {
        suffix = "rd";
    } 
    console.log(`${number}${suffix}`);
});
