function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialize(num - 1);
}

console.log(typeof factorialize(5) === 'number');

const inputs = [
  5,
  10,
  20,
  0
];
const outputs = [
  120,
  3628800,
  2432902008176640000,
  1
];

inputs.forEach((elem, i) => {
  console.log(factorialize(elem) === outputs[i]);
})
