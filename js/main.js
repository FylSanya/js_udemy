"use strict";

let numberOfFilms;

let personaMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: "",
    genres: [],
    privat: false,
    toggleVisibleMyDB: function () {
        personaMovieDB.privat = !personaMovieDB.privat;
    },
    showMyDB: function (status) {
        if(status == true) {
            console.log(personaMovieDB);
        }
    },
    writeYourGenres: function(i){
        let answer;
        while(answer == '' || answer == null) {
            answer = prompt(`Your ${i} favorite genre?`, "");
        }
        return answer;
    },
    start: function(){
        while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
            numberOfFilms = +prompt("How much films are you already watch?", "");
        }

        return numberOfFilms;
    },
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++){
            let name = prompt("Last film you've been watch?","");
            let rating = +prompt("How good is it?","");
            if(name == null || rating == null || name == "" || rating == "" || name.length > 50 || rating.length > 50 || isNaN(rating)) {
                i--;
            } else {
            personaMovieDB.movies[name] = rating;
            }
        }
    },
    detectPersonaLevel: function(count){
        if(count < 10){
            console.log("Noob");
        } else if (count >= 10 && count <= 30){
            console.log("Typical guy");
        } else if (count > 30) {
            console.log("Cyberpis'ka");
        } else {
            console.log("Something wrong");
        }
    }

};

personaMovieDB.count = personaMovieDB.start();
personaMovieDB.rememberMyFilms();
personaMovieDB.detectPersonaLevel(personaMovieDB.count);
personaMovieDB.toggleVisibleMyDB();
personaMovieDB.showMyDB(personaMovieDB.privat);

for (let i = 0; i < 3; i++){
    personaMovieDB.genres[i] = personaMovieDB.writeYourGenres(i+1);
}
personaMovieDB.genres.forEach(element => {
    let i = 0;
    i++;
    console.log(`Favorite genre #${personaMovieDB.genres.indexOf(element)+1} is - ${element}`);
});