// Question thirty seven, thirty eight & thirty nine
// Function to create a t-shirt with default parameters
function shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "Sky is the limit."; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
// Example calls to the shirt function
shirt(); // Default large size with default message
shirt("medium"); // Default message, medium size
shirt("small", "Shoot for the stars."); // Custom message, small size
// Function to describe cities with default parameters
function describeCity(name, population, country) {
    if (population === void 0) { population = 1000000; }
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(name, " is located in ").concat(country, " and has a population of ").concat(population, " people."));
}
// Example calls to the describeCity function
describeCity("New York"); // Uses default population and country
describeCity("Tokyo", 14000000); // Specifies population but uses default country
describeCity("London", 8900000, "United Kingdom"); // Specifies all parameters
// Function to concatenate city and country
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Example calls to the city_country function
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
