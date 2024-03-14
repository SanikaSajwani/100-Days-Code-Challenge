// Question  thirty four, thirty five & thirty six
var pizzas = ["Cheese", "Pepperoni", "Fajita"];
pizzas.forEach(function (pizza) {
    console.log("I love ".concat(pizza, " pizza."));
});
var animals = ["Cheetah", "Blue Whale", "Reindeer"];
animals.forEach(function (animal) {
    console.log("".concat(animal, " is a mammal."));
});
function shirt(size, message) {
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
shirt("large", "E=mc^2");
