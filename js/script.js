//Задача 1 "посчитайте, сколько будет 1 + 2 + ... + 100".
//Создадим переменную в которую положем сумму чисел.
var sum = 0;

//Создадим цикл, в который запишим заначение i = 1, 2, 3...99, 100.
for (var i = 0; i <= 100; i++) {
    sum = sum + i;
};

//Выведем в консоль ответ.
console.log(sum);

//Задача 2 "Выведите произведение чисел от 1 до 50".
//создадим переменную, как и впрошлом случае.
var pro = 0;

for (var i = 0; i <= 50; i++) {
    pro *= i; 
};