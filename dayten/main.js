// Question twenty eight, twenty nine & thirty
var age = 7;
// Test 1: Determine life stage based on age
if (age < 3) {
    console.log("Early childhood");
}
else if (age < 12) {
    console.log("Late childhood");
}
else if (age < 19) {
    console.log("Adolescence");
}
else if (age < 40) {
    console.log("Early adulthood");
}
else if (age < 65) {
    console.log("Middle adulthood");
}
else {
    console.log("Late adulthood");
}
var fav_fruit = ["Kiwi", "Banana", "Apple", "Orange"];
// Test 2: Check favorite fruits
if (fav_fruit.includes("Banana")) {
    console.log("You really like bananas!");
}
if (fav_fruit.includes("Apple")) {
    console.log("You really like apples!");
}
if (fav_fruit.includes("Kiwi")) {
    console.log("You really like Kiwi!");
}
if (fav_fruit.includes("Watermelon")) {
    console.log("You don't like Watermelons!");
}
var usernames = ["admin", "user01", "user02", "user03", "user04"];
// Test 3: Greet users based on their usernames
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, there are 42 mentions waiting for you.");
    }
    else {
        console.log("Hello ".concat(username, ", welcome back."));
    }
});
