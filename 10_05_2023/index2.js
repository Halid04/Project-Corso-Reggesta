const nums = [5, 10, 15, 30, 40];

let somma = 0;

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

console.log();

for (let i = 0; i < nums.length; i++) {
  console.log("titolo " + i + " = " + nums[i]);
  somma += nums[i];
}
console.log();
console.log("Somma numeri array = " + somma);
