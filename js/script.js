//Задача 1 "посчитайте, сколько будет 1 + 2 + ... + 100".

//Создадим массив, в который потом передадим числа из цикла.
var numbers = [];
//Создадим переменную в которую положем сумму чисел массива numbers.
var sum = 0;

//Создадим цикл, в который запишим заначение i = 1, 2, 3...99, 100.
for (var i = 0; i <= 100; i++) {
    sum += numbers[i];
}