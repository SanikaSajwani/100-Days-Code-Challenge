//Question sixteen, seventeen & eighteen
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var guests = ["Sylvia Plath", "Marie Curie", "Harper Lee"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Narges Mohammadi");
guests.splice(guests.length / 2, 0, "Claudia Goldin");
guests.push("Ada Lovelace");
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", would you like to join me for dinner?"));
});
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list
var places = ["Kenya", "Massachusetts", "United Kingdom", "Switzerland", "Poland"];
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
/* places.sort();
console.log("Alphabetical order:", places);
*/
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse());
/*places.reverse();
console.log("Reverse alphabetical order:", places);
*/
places.reverse();
console.log("Reversed order:", places);
