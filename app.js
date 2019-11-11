var number = prompt("Введите ваше число");

var squere = number*number;

alert ("Ваше число: " + number + ", его квадрат равен = " + squere);

var contributorName = prompt("Укажите Ваше имя");
var deposit = prompt("Введите сумму желаемого депозита");
var term = prompt("Укажите срок депозита в днях");
var month = 30;
var interestRatePerMonth = deposit*0.175;
var interestRatePerDay = interestRatePerMonth/month;

alert (contributorName + ", С суммой депозита " + deposit + "грн и процентной ставкой 17.5%/мес, Ваша прибыль составит " + interestRatePerDay + "грн/день, " + interestRatePerDay*term  + "грн/" + term + " дней и " + interestRatePerMonth + "грн/месяц");