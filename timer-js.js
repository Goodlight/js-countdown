// ставим дату до нужного события
var target_date = new Date("Dec 25, 2015").getTime();
 
// переменные для измерения времени
var days, hours, minutes, seconds;
 
// обращение к контейнеру countdown
var countdown = document.getElementById("countdown");
 
// обновление счетчика каждую секунду
setInterval(function () {
 
    // поиск разницы между устанвленной датой и текущей
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    countdown.innerHTML = "<div class='days'>" + days + "</div> : " + "<div class='hours'>" +  hours + "</div> : " + "<div class='min'>" +
    + minutes + "</div> : "+ "<div class='sec'>" + + seconds+ "</div>";  
 
}, 1000);