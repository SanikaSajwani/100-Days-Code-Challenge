// Question forty, forty-one, & forty-two
// Function to create an album object
function createAlbum(title, artist, releaseYear, genre) {
    return {
        title: title,
        artist: artist,
        releaseYear: releaseYear,
        genre: genre
    };
}
// Example calls to the createAlbum function
var album1 = createAlbum("Thriller", "Michael Jackson", 1982, "Pop");
var album2 = createAlbum("Back in Black", "AC/DC", 1980);
console.log(album1);
console.log(album2);
// Function to display magician names from an array
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Example array of magician names
var magicians = ["Alice", "David", "Chris"];
// Call the show_magicians function with the magicians array
show_magicians(magicians);
// Function to add "the Great" suffix to magician names
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
