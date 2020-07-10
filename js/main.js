"use strict";


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
