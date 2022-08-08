class GuessingGame {

    constructor() {

    }

    setRange(min, max) {
    //этот метод принимает минимальное и максимальное значение диапазона чисел для угадывания
        this.min = min;
        this.max = max;
    }
    guess() {
    //этот метод возвращает кандидата решения (вы делаете предположение на основе диапазона и предыдущих предположений)
        return Math.round(((this.max - this.min)/2) + this.min);
    }

    lower() {
    //этот метод вызывается, если предыдущий вызов guess() вернул число, которое больше, чем ответ
        this.max = Math.round(((this.max - this.min)/2) + this.min);
    }

    greater() {
        this.min = Math.round(((this.max - this.min)/2) + this.min);
    //этот метод вызывается, если предыдущий вызов функции guess() вернул число, которое меньше, чем ответ
    }
}

module.exports = GuessingGame;
