let min = -999, max = 999;
let guess;
let attempts = 0;

const questionElement = document.getElementById('question');
const resultElement = document.getElementById('result');
const greaterButton = document.getElementById('greater');
const lessButton = document.getElementById('less');
const correctButton = document.getElementById('correct');
const resetButton = document.getElementById('reset');

// Функция для начала новой игры
function startNewGame() {
    min = -999;
    max = 999;
    attempts = 0;
    guess = Math.floor((min + max) / 2);
    questionElement.textContent = `Ты загадал число ${getNumberInWords(guess)}?`;
    resultElement.textContent = '';
    greaterButton.disabled = false;
    lessButton.disabled = false;
    correctButton.disabled = false;
}

// Функция преобразования числа в текст
function getNumberInWords(number) {
    const words = [
        "ноль", "один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять",
        "десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать",
        "семнадцать", "восемнадцать", "девятнадцать", "двадцать", "тридцать", "сорок", "пятьдесят",
        "шестьдесят", "семьдесят", "восемьдесят", "девяносто", "сто", "двести", "триста", "четыреста",
        "пятьсот", "шестьсот", "семьсот", "восемьсот", "девятьсот"
    ];

    if (number < 0) return "минус " + getNumberInWords(-number);
    if (number < 20) return words[number];
    if (number < 100) return words[Math.floor(number / 10) + 18] + (number % 10 ? " " + words[number % 10] : "");
    if (number < 1000) return words[Math.floor(number / 100) + 28] + (number % 100 ? " " + getNumberInWords(number % 100) : "");

    return number.toString();
}

// Обработчик для кнопки "Больше"
greaterButton.addEventListener('click', () => {
    min = guess + 1;
    attempts++;
    guess = Math.floor((min + max) / 2);
    questionElement.textContent = `Ты загадал число ${getNumberInWords(guess)}?`;
});

// Обработчик для кнопки "Меньше"
lessButton.addEventListener('click', () => {
    max = guess - 1;
    attempts++;
    guess = Math.floor((min + max) / 2);
    questionElement.textContent = `Ты загадал число ${getNumberInWords(guess)}?`;
});

// Обработчик для кнопки "Верно!"
correctButton.addEventListener('click', () => {
    resultElement.textContent = `Поздравляю! Я угадал число за ${attempts} попыток.`;
    greaterButton.disabled = true;
    lessButton.disabled = true;
    correctButton.disabled = true;
});

// Обработчик для кнопки "Заново"
resetButton.addEventListener('click', startNewGame);

// Начинаем игру при загрузке страницы
startNewGame();