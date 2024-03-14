//Question thirteen, fourteen, & fifteen 
var transports = ["Car", "Bike", "Carriage"];
transports.forEach(function (transport) {
    console.log("I would like to own a ".concat(transport, "."));
});
var guests = ["Betty White", "Olivia Rodrigo", "Mahmoud Darwish"];
guests.forEach(function (guest) {
    console.log("I would like to invite ".concat(guest, " for dinner tonight."));
});
var unableToAttend = "Betty White";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Paris Paloma";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guest) {
    console.log("I would like to invite ".concat(guest, " for dinner tonight."));
});
