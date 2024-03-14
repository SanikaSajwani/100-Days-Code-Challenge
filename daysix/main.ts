// Question sixteen, seventeen & eighteen

// Array of initial guests
let guests: string[] = ["Sylvia Plath", "Marie Curie", "Harper Lee"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("Narges Mohammadi"); // Add at the beginning
guests.splice(guests.length / 2, 0, "Claudia Goldin"); // Add in the middle
guests.push("Ada Lovelace"); // Add at the end

// Invite all guests
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});

console.log("Unfortunately, I can only invite two people for dinner.");

// Remove guests until only two remain
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

// Confirm remaining guests' invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});

// Clear the list of guests
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list

// Array of places
let places: string[] = ["Kenya", "Massachusetts", "United Kingdom", "Switzerland", "Poland"];

console.log("Original order:", places);

// Reverse the order of places
places.reverse();
console.log("Reversed order:", places);

// Sort places alphabetically (ascending)
console.log("Alphabetical order:", [...places].sort());

// Sort places in reverse alphabetical order (descending)
console.log("Reverse alphabetical order:", [...places].sort().reverse());
