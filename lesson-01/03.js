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
  if (count % 2 !== 0) {
    sum = sum + count
  }
  count = count +1
}
console.log(sum, count);

