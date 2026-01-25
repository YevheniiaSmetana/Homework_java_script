// С помощью цикла while найдите сумму чисел от 1 до 20
// Результат присвойте переменной sum

// your code
const INITIAL_CIFER = 1
const MAX_CIFER = 20
let sum =0 
let count = INITIAL_CIFER
while (count <= MAX_CIFER ) {
    sum = sum + count
    count=count+1
}
console.log(sum, count);

