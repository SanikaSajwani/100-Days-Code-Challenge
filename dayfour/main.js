// Question ten, eleven & twelve
// Array of names
var names = ["Harvey", "Donna", "Michael"];
// Loop through each name in the 'names' array and print it
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
// Loop through each name in the 'name$' array and print a birthday invitation message
for (var i = 0; i < names.length; i++) {
    console.log("Hi! ".concat(names[i], ". You are invited to my birthday party."));
}
