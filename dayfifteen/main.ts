// Question forty three, forty four & forty five 

// Function to add "the Great" suffix to magician names and return a new array
function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push(magicians[i] + " the Great");
    }
    return modifiedMagicians;
}

// Example array of magician names
let magicians: string[] = ["Alice", "David", "Chris"];

// Call the make_great function with a copy of the magicians array
let greatMagicians: string[] = make_great([...magicians]); // Use spread operator to create a shallow copy

// Function to display magician names from an array
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Call show_magicians function with both original and modified arrays
console.log("Original Magicians:");
show_magicians(magicians);
console.log("Great Magicians:");
show_magicians(greatMagicians);

// Function to summarize a sandwich order
function orderSandwich(...items: string[]) {
    console.log("Sandwich Order:");
    items.forEach(item => {
        console.log(`- ${item}`);
    });
}

// Example calls to the orderSandwich function with different numbers of arguments
orderSandwich("Ham", "Cheese", "Lettuce", "Tomato");
orderSandwich("Turkey", "Swiss Cheese", "Mustard");
orderSandwich("Tuna Salad");

// Function to store information about a car in an object
function createCar(manufacturer: string, modelName: string, ...options: [string, any][]): { manufacturer: string, modelName: string, [key: string]: any } {
    let car: { manufacturer: string, modelName: string, [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    options.forEach(option => {
        car[option[0]] = option[1];
    });
    return car;
}

// Example call to the createCar function with required information and additional options
let myCar = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);

// Print the object to check if all information was stored correctly
console.log(myCar);
