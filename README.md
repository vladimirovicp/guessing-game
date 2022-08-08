4048  / 2 = 2024 <br>
2024 > 409 lower() <br>
2024 / 2 <br>
1012 > 409 lower() <br>
1012 / 2 = 506 <br>
506 > 409 lower() <br>
506 / 2 <br>
253 < 409 greater() <br>
253 по 506   379,5  380 <br>
380 < 409 greater() <br>
380 по 506  (506-380)/2 = 63 + 380 <br>
443 > 409 lower() <br>
380 по 443   31.5 + 380 = 411.5 <br>
412 > 409 lower() <br>
380 по 412  (412-380)/2 = 16 + 380 = 396 <br>
396 < 409 greater() <br>
396 по 412   16/2 + 396 = 404 <br>
404 < 409 greater() <br>
404 по 412  4 + 404 = 404 <br>
408 < 409 greater() <br>
408 по 412  2 + 408 <br>
410 > 409 lower() <br>
408 по 410  2/2=1 + 408 <br>
409 = 409 <br>

Подскажите, что надо сделать в guessing game. С английским у меня пока  не очень. Я понял что надо, используя бинарный поиск, написать класс с методами.  Один метод устанавливает диапазон чисел. Метод guess что-то возвращает. И еще два метода которые вызываются если не попали в заданное число. Это что-то типа детской игры? Один загадывает число, а второй пытается отгадать. И первый  указывает направление движения: "больше" или "меньше". Отгадать надо за минимальное количество шагов. Что-то такое?

надо написать guess lower и greater реализации
lower и greater меняют одну из границ
а guess по методу бинарного поиска возвращает число-предположение

Можно пояснить немного? Я правильно понимаю, что в setRange, я должен сформулировать допустим массив от мин до Макса, потом его передать в guess, где будет возвращаться значение по середине, и дальше в зависимости от больше меньше смещаем границы, не могу понять как передать той же функции guess , массив значений

https://learn.javascript.ru/class

в тестах через setRange инициализируется, в конструктор ничего не передается
смотрите тесты, там ответы на все вопросы)

я верно понимаю, что setRange возвращает массив, со значениями в диапазоне от min до max?

вы ничего не должны сравнивать
вы должны возвращать из guess число

ну я так и делаю
function guess() {
let arr = setRange(0, 1501);
let num = arr[Math.ceil(arr.length / 2)];
return num;
}

у вас уже должен быть установлен range
а границы должны меняться через lower и greater



### Guessing game

---
⚠️ DO NOT SUBMIT PRS WITH SOLUTIONS TO THIS REPO ⚠️

### Description

Your task is to implement `GuessingGame` class

#### Methods:

##### `setRange(min, max)`
this method accepts min and max value of range of number to guess

##### `guess()`
this method returns solution candidate (you make an assumption based on range and previous assumptions)

##### `lower()`
this method is called if prev call of `guess()` returned number which is greater than answer

##### `greater()`
this method is called if prev call of `guess()` returned number which is lower than answer

Your implementation should use [binary search algorithm](https://en.wikipedia.org/wiki/Binary_search_algorithm) under the hood to pass all tests

### Prerequisites
1. Install [Node.js](https://nodejs.org/en/download/)   
2. Fork this repository: https://github.com/rolling-scopes-school/guessing-game/
3. Clone your newly created repo: https://github.com/<%your_github_username%>/guessing-game/  
4. Go to folder `guessing-game`  
5. To install all dependencies use [`npm install`](https://docs.npmjs.com/cli/install)  
6. Run `npm test` in command line or you can run tests in browser with `npm start` and open http://localhost:8080
7. You will see the number of passing and failing tests. 100% of passing tests is equal to 100p in score  

---

### Submit to [rs app](https://app.rs.school)
1. Open [rs app](https://app.rs.school) and login
2. Open `RS APP` and click `Auto Test`
3. Select your task (guessing-game)
4. Press the submit button and enjoy

### Notes
1. We recommend you to use nodejs of version 14 or lower. If you using any of features that does not supported by node v10, score won't be submitted.
2. Please be sure that each of your test in limit of 30sec.

© [lesnitsky](https://github.com/lesnitsky)
