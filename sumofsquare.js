let sum = 0;
let square_sum = 0;
for (let i = 1; i <= 100; ++ i) {
   sum += i;
   square_sum += i * i;
}
console.log(square_sum - sum * sum);

