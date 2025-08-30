const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, value) {
  const position = nameList.indexOf(value);
  if (position !== -1) {
    return { found: true, position: position };
  } else {
    return { found: false };
  }
}

console.log(nameFinder(names, 'Natasha')); // { found: true, position: 3 }
console.log(nameFinder(names, 'Nick'));    // { found: false }
