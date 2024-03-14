// Question thirteen, fourteen, & fifteen

// Array of transports
let transports: string[] = ["Car", "Bike", "Carriage"];

// Loop through each transport in the 'transports' array and print a message
transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});

// Array of guests
let guests: string[] = ["Betty White", "Olivia Rodrigo", "Mahmoud Darwish"];

// Loop through each guest in the 'guests' array and print a dinner invitation message
guests.forEach(guest => {
    console.log(`I would like to invite ${guest} for dinner tonight.`);
});

// Guest unable to attend
let unableToAttend: string = "Betty White";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest who can't attend with a new guest
let newGuest: string = "Paris Paloma";
guests[guests.indexOf(unableToAttend)] = newGuest;

// Print new invitations with the updated guest list
guests.forEach(guest => {
    console.log(`I would like to invite ${guest} for dinner tonight.`);
});
