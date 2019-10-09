/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding: "this" refers to the window/console object.
* 2. Implicit binding: "this" refers to the object before the preceding dot when a function is called.
* 3. New binding: "this" refers to the specific instance of the object that is created using the "new" keyword.
* 4. Explicit binding: Whenever .call or .apply is used, "this" is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

function sayName(name) {
    console.log(this);
    return name;
}
sayName('Sean');

// Principle 2

const myObj = {
    greeting: 'Good Morning, ',
    greetPerson: function (name) {
        console.log(`${this.greeting} my name is ${name}!`);
        console.log(this);
    }
};

myObj.greetPerson('Sean');
// Principle 3

function Song(artist, name, album) {
    this.artist = artist;
    this.name = name;
    this.album = album;
    this.about = function () {
        console.log(`${this.name} is from the album ${this.album} by ${this.artist}`);
        console.log(this);
    }
}

const thirdTrack = new Song('Avenged Sevenfold', 'Chapter Four', 'Waking The Fallen');
const fourthTrack = new Song('Avenged Sevenfold', 'Buried Alive', 'Nightmare');

thirdTrack.about();
fourthTrack.about();

// Principle 4

thirdTrack.about.call(fourthTrack);
fourthTrack.about.apply(thirdTrack);