const numberOfFilms = +prompt(
    'How many films watch?', ''
);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
const a = prompt('Last watch film?', ''),
    b = promt('rank of number', ''),
    c = prompt('Last watch film?', ''),
    d = prompt('Last watch film?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);
