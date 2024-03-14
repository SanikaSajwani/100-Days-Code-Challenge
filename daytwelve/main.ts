// Question thirty four, thirty five & thirty six

let pizzas: string[] = ["Cheese", "Pepperoni", "Fajita"];

// Test 1: Loop through each pizza in the array
pizzas.forEach(pizza => {
    console.log(`I love ${pizza} pizza.`);
});

let animals: string[] = ["Cheetah", "Blue Whale", "Reindeer"];

// Test 2: Loop through each animal in the array
animals.forEach(animal => {
    console.log(`${animal} is a mammal.`);
});

// Test 3: Function to make a t-shirt with size and message
function shirt(size: string, message: string) {
    console.log(`Making a ${size} t-shirt with the message ${message} printed on it.`);
}

shirt("large", "E=mc^2");
