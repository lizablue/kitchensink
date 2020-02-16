// variables: name, US States count, 5 + 4
let name = 'Liz'
let val = 5 + 4

// sorry this song is going to be stuck in your head all day :)
const unitedStates = '50 nifty United States from 13 original colonies'

// hello step 7 
function sayHello() {
    alert('Hello World ' + 'from the ' + unitedStates + '.');
};

sayHello();

// you aren't old enough to view step 8 
function checkAge(name, age) {
    if(age < 21) {
    alert('Sorry ' + name + ', you aren\'t old enough to view this page!');
    }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

// step 9 veggies
let veggies = ['carrots', 'zucchini', 'baby corn', 'green peppers', 'potatoes'];

for(var i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}

