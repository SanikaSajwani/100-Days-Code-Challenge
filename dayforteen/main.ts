// Question forty, forty-one, & forty-two

// Function to create an album object
function createAlbum(title: string, artist: string, releaseYear?: number, genre?: string): 
{ title: string, artist: string, releaseYear?: number, genre?: string } {
    return {
        title: title,
        artist: artist,
        releaseYear: releaseYear,
        genre: genre
    };
}

// Example calls to the createAlbum function
let album1 = createAlbum("Thriller", "Michael Jackson", 1982, "Pop");
let album2 = createAlbum("Back in Black", "AC/DC", 1980);

console.log(album1);
console.log(album2);

// Function to display magician names from an array
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Example array of magician names
let magicians: string[] = ["Alice", "David", "Chris"];

// Call the show_magicians function with the magicians array
show_magicians(magicians);

// Function to add "the Great" suffix to magician names
function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}

make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names
