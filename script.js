'use strict';


var money = +prompt("Ваш буджет на месяц?", ""),
    time = prompt("Введите дату в формате YYYY-MM-DD", ""),
    quastion1 = prompt("Введите обязательную статью расходов в этом месяце:", ""),
    quastion2 = +prompt("Во сколько обойдется?", ""),
    quastion3 = prompt("Введите обязательную статью расходов в этом месяце:", ""),
    quastion4 = +prompt("Во сколько обойдется?", "");

var appData = {
    budget: money,
    timeData: [time],
    expenses1: {
        [quastion1]: quastion2
    },
    expenses2: {
        [quastion3]: quastion4
    },
    optionalExpenses: null,
    income: [],
    savings: false
};

var budgetDay = appData.budget/30;
alert ("Ваш дневной бюджет составит:" + budgetDay);

var budgetDayFree = (appData.budget-(quastion2+quastion4))/30;
alert ("Ваш дневной бюджет с учетом обязательных платежей составит:" + budgetDayFree);
