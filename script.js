"use strict";

let numberOfFilms = +prompt("Сколько фидьмов вы уже посмотрели?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {
  let nameFilm = prompt("Один из последних просмотренных фильмов?", ""),
    raitFilm = +prompt("На сколько оцените его?", "");
  if (
    nameFilm != "" &&
    raitFilm != "" &&
    nameFilm != null &&
    raitFilm != null &&
    nameFilm.length < 50
  ) {
    personalMovieDB.movies[nameFilm] = raitFilm;
  } else {
    i--;
  }
}

if (personalMovieDB.count < 10 && personalMovieDB.count > 0) {
  alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
  alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
  alert("Вы киноман!");
} else {
    alert("Произошла ошибка!");
}

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
