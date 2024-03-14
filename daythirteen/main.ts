// Question thirty seven, thirty eight & thirty nine

// Function to create a t-shirt with default parameters
function shirt(size: string = "large", message: string = "Sky is the limit.") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

// Example calls to the shirt function
shirt(); // Default large size with default message
shirt("medium"); // Default message, medium size
shirt("small", "Shoot for the stars."); // Custom message, small size

// Function to describe cities with default parameters
function describeCity(name: string, population: number = 1000000, country: string = "Unknown") {
    console.log(`${name} is located in ${country} and has a population of ${population} people.`);
}

// Example calls to the describeCity function
describeCity("New York"); // Uses default population and country
describeCity("Tokyo", 14000000); // Specifies population but uses default country
describeCity("London", 8900000, "United Kingdom"); // Specifies all parameters

// Function to concatenate city and country
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Example calls to the city_country function
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
