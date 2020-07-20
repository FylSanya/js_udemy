"use strict";

let numberOfFilms;

function showMyDB(status) {
    if(!status) {
        console.log(personaMovieDB);
    }
}

let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: "",
    genres: [],
    privat: false,
};



function writeYourGenres(i) {
    let answer = prompt(`Your ${i} favorite genre?`, "");
    return answer;
}


function start() {
    numberOfFilms = +prompt("How much films are you already watch?", "");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt("How much films are you already watch?", "");
    }

    return numberOfFilms;
}

personaMovieDB.count = start();


function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        let name = prompt("Last film you've been watch?","");
        let rating = +prompt("How good is it?","");
        if(name == null || rating == null || name == "" || rating == "" || name.length > 50 || rating.length > 50) {
            i--;
        } else {
        personaMovieDB.movies[name] = rating;
        }
    }
}

rememberMyFilms();

for (let i = 0; i < 3; i++){
    personaMovieDB.genres[i] = writeYourGenres(i+1);
}
function detectPersonaLevel(count) {
    if(count < 10){
        console.log("Ti loh");
    } else if (count >= 10 && count <= 30){
        console.log("Norm chel");
    } else if (count > 30) {
        console.log("demon");
    } else {
        console.log("shota ne to");
    }
}

detectPersonaLevel(personaMovieDB.count);

showMyDB(personaMovieDB.privat);