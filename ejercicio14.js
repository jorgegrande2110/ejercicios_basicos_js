const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];

function repeatCounter(list) {
  const count = {};
  for (const word of list) {
    count[word] = (count[word] || 0) + 1;
  }
  return count;
}

console.log(repeatCounter(words));
