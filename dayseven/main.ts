// Question nineteen, twenty, twenty-one

// Array of guests
let guests: string[] = ["Sylvia Plath", "Marie Curie", "Harper Lee", "Narges Mohammadi", "Claudia Goldin", "Ada Lovelace"];

// Display the number of guests invited to dinner
console.log(`I am inviting ${guests.length} people to dinner.`);

// Array of cities
let cities: string[] = ["Karachi", "Lahore", "Islamabad"];

// Display popular cities in Pakistan
console.log("Popular cities in Pakistan:", cities);

// Object representing a restaurant
let restaurant: { location: string; timings: string; serves: string } = {
    location: "Tipu Sultan Road",
    timings: "5 pm to 7 pm",
    serves: "Thai & Sushi"
};

// Display information about the restaurant
console.log(`The restaurant is located at ${restaurant.location}, which is open from ${restaurant.timings}, and serves ${restaurant.serves}.`);
