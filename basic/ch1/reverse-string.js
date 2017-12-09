function reverseString(str) {
  return str.split('').reverse().join('');
}

// Returns a string
console.log(typeof reverseString('hello') === 'string');

const input = [
  'hello',
  'Howdy',
  'Greetings from Earth'
];
const output = [
  'olleh',
  'ydwoH',
  'htraE morf sgniteerG'
];

input.forEach((elem, i) => {
  console.log(reverseString(elem) === output[i]);
})
