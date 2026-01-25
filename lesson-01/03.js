/* Используйте цикл while для нахождения суммы всех нечётных чисел от 1 до 20.
  Результат вычислений сохраните в переменной sum.

  Вам понадобиться оператор остатка от деления %. Например, выражение 5 % 2 вернёт остаток 1.
*/

// your code
const INITIAL_CIFER=1
const MAX_CIFER=20
let sum = 0
let count = INITIAL_CIFER
while (count <= MAX_CIFER) {
  sum = sum + count
  count = count +2
}
console.log(sum, count);

