//1. For Loop
const sum_to_n_a = (n) => {
  let sum = 0;
  //O(n)
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
};
console.log("method 1 with BigO is O(n):", sum_to_n_a(5));

//2. Make an array from input

const sum_to_n_b = (n) => {
  let arrFromInput = Array.from({ length: n }, (_, i) => i + 1); //O(n)
  let sum = 0;
  arrFromInput.forEach((e) => (sum += e)); //O(n)
  return sum;
};
console.log("method 2 with BigO is O(n):", sum_to_n_b(5));

//3. Normal math
const sum_to_n_c = (n) => {
  return (n * (n + 1)) / 2; //O(1)
};
console.log("method 3 with BigO is O(1):", sum_to_n_c(5));

//Method 3 will give best performance but it's hard to find the math formula, so Method 1 and 2 with O(n) are good options to replace for Method 3
