"use strict";

let numberOfFilms = +prompt ('Сколько фидьмов вы уже посмотрели?');

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

let nameFilm1 = prompt ('Один из последних просмотренных фильмов?', ''),
    raitFilm1 = +prompt ('На сколько оцените его?', ''),
    nameFilm2 = prompt ('Один из последних просмотренных фильмов?', ''),
    raitFilm2 = +prompt ('На сколько оцените его?', '');

    personalMovieDB.movies[nameFilm1] = raitFilm1;
    personalMovieDB.movies[nameFilm2] = raitFilm2; 
    console.log(personalMovieDB);
    


/*let money = +prompt("Ваш буджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    quastion1 = prompt("Введите обязательную статью расходов в этом месяце:", ""),
    quastion2 = +prompt("Во сколько обойдется?", ""),
    quastion3 = prompt("Введите обязательную статью расходов в этом месяце:", ""),
    quastion4 = +prompt("Во сколько обойдется?", "");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

appData.expenses[quastion1] = quastion2;
appData.expenses[quastion3] = quastion4;

let budgetDay = appData.budget/30;
alert ("Ваш дневной бюджет составит:" + budgetDay);

let budgetDayFree = (appData.budget-(quastion2+quastion4))/30;
alert ("Ваш дневной бюджет с учетом обязательных платежей составит:" + budgetDayFree);
*/
