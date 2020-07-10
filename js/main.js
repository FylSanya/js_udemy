// "use strict";

// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

// const person = `Alexey`;
// console.log(person);

// let num = '11';
// num += 1;
// console.log(num);
// num -= 1;
// console.log(num);

// const result = confirm("poshel k cherty");

const numberOfFilms = +prompt("How much films are you already watch?", "");

let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: "",
    genres: [],
    privat: false,
};

let name1 = prompt("Last film you've been watch?","");
let rating1 = +prompt("How good is it?","");
personaMovieDB.movies[name1] = rating1;

let name2 = prompt("Last film you've been watch?","");
let rating2 = +prompt("How good is it?"," ");
personaMovieDB.movies[name2] = rating2;

console.log(personaMovieDB);