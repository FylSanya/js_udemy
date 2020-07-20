"use strict";

let answer = 0;

const numberOfFilms = +prompt("How much films are you already watch?", "");
console.log(numberOfFilms);




let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: "",
    genres: [],
    privat: false,
};


if(personaMovieDB.count < 10){
    console.log("Ti loh");
} else if (personaMovieDB.counts >= 10 && personaMovieDB.count <= 30){
    console.log("Norm chel");
} else if (personaMovieDB.count > 30) {
    console.log("demon");
} else {
    console.log("hota ne to");
}


for (let i = 0; i < 2; i++){
    let name = prompt("Last film you've been watch?","");
    let rating = +prompt("How good is it?","");
    if(name == null || rating == null || name == "" || rating == "" || name.length > 50 || rating.length > 50) {
        i--;
    } else {
    personaMovieDB.movies[name] = rating;
    }
}


console.log(personaMovieDB);