"use strict" 

const numberOfFilms = prompt("Cколько фильмов вы уже посмотрели","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    generals: [],
    privat: false
};

const   a = prompt('Последний фильм'), 
        b = prompt("Какая оценка?"), 
        с = prompt('Последний фильм'), 
        d = prompt("Какая оценка?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[с] = d;

console.log(personalMovieDB);
